import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import AdvancedSearchBar from './AdvancedSearchBar';
import ResultTable from './ResultTable';

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
        major: [],
        date: [new Date(), new Date()],
        sourcefilter: 0b00000000000111,
      },
    };
    this.state.searchQuery.date[0].setDate(
      this.state.searchQuery.date[1].getDate() - 5
    );
    this.search();
  }

  componentDidMount() {}

  updateData = (target, value) => {
    this.setState({ [target]: value });
  };

  updateQuery = (target, value) => {
    this.setState(prevState => ({
      searchQuery: {
        ...prevState.searchQuery,
        [target]: value,
      },
    }));
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
    console.log(url + '?' + queryString);
    fetch(url + '?' + queryString)
      .then(response => response.json())
      .then(data => {
        const totalPage = Math.ceil(data.total / this.state.size);
        this.setState(
          { searchResults: data.items, totalPage: totalPage }
        );
      });
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Grid
          templateRows="50px 1fr 2fr 5fr 50px"
          minH={"100vh"}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem rowSpan={1} pl={2} bg="orange.300">
            Header
          </GridItem>
          <GridItem rowSpan={1} pl={2}>
            <Center h="100%" axis="both">
              <SearchBar
                updateData={this.updateData}
                advancedSearch={this.state.advancedSearch}
                search={this.search}
              />
            </Center>
          </GridItem>
          {this.state.advancedSearch && (
            <GridItem rowSpan={1} pl={2}>
              <Center h="100%" axis="both">
                <AdvancedSearchBar
                  updateQuery={this.updateQuery}
                  majors={this.state.searchQuery.major}
                  dates={this.state.searchQuery.date}
                  sourcefilter={this.state.searchQuery.sourcefilter}
                />
              </Center>
            </GridItem>
          )}
          <GridItem rowSpan={this.state.advancedSearch ? 1 : 2} pl="2">
            <ResultTable
              searchResults={this.state.searchResults}
              page={this.state.page}
              totalPage={this.state.totalPage}
              updatePage={this.updatePage}
            />
          </GridItem>
          <GridItem rowSpan={1} pl="2" bg="blue.300">
            Footer
          </GridItem>
        </Grid>
      </ChakraProvider>
    );
  }
}
