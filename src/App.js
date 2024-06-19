import React from 'react';
import {
  ChakraProvider,
  Center,
  Image,
  VStack,
  Box,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import AdvancedSearchBar from './AdvancedSearchBar';
import ResultTable from './ResultTable';
import FooterSection from './FooterSection';
import Pagination from './Pagination';
import theme from './theme';
import Fonts from './font';

function clone(obj) {
  var res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      advancedSearch: false,
      page: 1,
      size: 10,
      totalPage: 1,
      searchQuery: {
        keyword: '',
        major: [],
        date: [new Date(), new Date()],
        sourcefilter: 0b00000000000111,
      },
    };
    this.state.searchQuery.date[0].setDate(
      this.state.searchQuery.date[1].getDate() - 5
    );
    this.search();
    this.boxRef = React.createRef();
    this.advancedSearchRef = React.createRef();
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.advancedSearch !== this.state.advancedSearch) {
      if (this.state.advancedSearch) {
        this.boxRef.current.style.height = 'calc(62px + 34vh)';
      } else {
        if (this.boxRef.current) {
          this.boxRef.current.style.height = '0px';
        }
      }
    }
  }

  updateData = (target, value) => {
    this.setState({ [target]: value });
  };

  updateQuery = (target, value) => {
    this.setState(
      prevState => ({
        searchQuery: {
          ...prevState.searchQuery,
          [target]: value,
        },
      }),
      () => {
        this.search();
      }
    );
  };

  updatePage = page => {
    this.setState({ page }, () => {
      this.search();
    });
  };

  updateSize = size => {
    this.setState({ size }, () => {
      this.search();
    });
  };

  TimeToString = date => {
    let newd = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return newd.toISOString().replace('Z', '+09:00');
  };

  search = () => {
    const url = new URL('https://api.notifyinha.today/v1/notices');
    let query = clone(this.state.searchQuery);
    query.major = query.major.map(major => major.value);
    query.date = query.date.map(date => this.TimeToString(date));
    query.page = this.state.page.toString();
    query.size = this.state.size.toString();
    const queryString = new URLSearchParams(query).toString();
    fetch(url + '?' + queryString)
      .then(response => response.json())
      .then(data => {
        const totalPage = Math.ceil(data.total / this.state.size);
        this.setState({ searchResults: data.items, totalPage: totalPage }, ()=>{if (this.state.page > totalPage) this.updatePage(totalPage)});
      });
  };

  getDetail = async id => {
    const url = new URL('https://api.notifyinha.today/v1/notices/' + id);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Fonts />
        <VStack spacing={'30px'}>
          <Spacer />
          <Box>
            <Center>
              <Image src="./logo.svg" w={'260px'} />
            </Center>
          </Box>
          <Box w={'80vw'}>
            <Box
              bg="searchbar.background"
              p={2}
              h={'57px'}
              borderTopRadius="1rem"
            >
              <SearchBar
                updateQuery={this.updateQuery}
                updateData={this.updateData}
                advancedSearch={this.state.advancedSearch}
                search={this.search}
              />
            </Box>
            <Box
              bg="searchbar.background"
              h={'0px'}
              pt={'0'}
              overflow="hidden"
              ref={this.boxRef}
              style={{ transition: 'height 0.3s ease' }}
            >
              <Center axis="both" h={'100%'} pb={2}>
                <AdvancedSearchBar
                  ref={this.advancedSearchRef}
                  updateQuery={this.updateQuery}
                  majors={this.state.searchQuery.major}
                  dates={this.state.searchQuery.date}
                  sourcefilter={this.state.searchQuery.sourcefilter}
                />
              </Center>
            </Box>

            <Stack bg="white" p={4} borderBottomRadius="1rem" minH={'60vh'}>
              <ResultTable
                searchResults={this.state.searchResults}
                page={this.state.page}
                totalPage={this.state.totalPage}
                updatePage={this.updatePage}
                getDetail={this.getDetail}
              />

              <Spacer />
              <Pagination
                currentPage={this.state.page}
                totalPages={this.state.totalPage}
                onPageChange={this.updatePage}
              />
            </Stack>
          </Box>
          <Box h={'65px'} />
          <FooterSection />
        </VStack>
      </ChakraProvider>
    );
  }
}
