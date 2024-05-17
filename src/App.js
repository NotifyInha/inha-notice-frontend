import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      advancedSearch: false,
    };
  }

  updateData = (target, value) => {
    this.setState({[target]: value});
  };



  render() {
    return (
      <ChakraProvider theme={theme}>
        <Grid
          // templateAreas={`"header header"
          //           "SearchBar SearchBar"
          //           "nav main"
          //           "footer footer"`}
          templateRows="50px 1fr 2fr 5fr 50px"
          templateColumns="150px 1fr"
          // gridTemplateRows={'50px 1fr 5fr 50px'}
          // gridTemplateColumns={'150px 1fr'}
          h="100vh"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem
            colSpan={2}
            rowSpan={1}
            pl={2}
            bg="orange.300"
            area={'header'}
          >
            Header
          </GridItem>
          <GridItem colSpan={2} rowSpan={this.state.advancedSearch ? 2 : 1} pl={2} area={'SearchBar'}>
            <Center h="100%" axis="both">
              <SearchBar updateData={this.updateData} advancedSearch={this.state.advancedSearch} />
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={this.state.advancedSearch ? 1 : 2} pl="2" bg="pink.300" area={'nav'}>
            Nav
          </GridItem>
          <GridItem colSpan={1} rowSpan={this.state.advancedSearch ? 1 : 2} pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
          <GridItem
            colSpan={2}
            rowSpan={1}
            pl="2"
            bg="blue.300"
            area={'footer'}
          >
            Footer
          </GridItem>
        </Grid>
      </ChakraProvider>
    );
  }
}
