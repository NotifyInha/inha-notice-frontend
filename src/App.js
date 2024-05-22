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


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      advancedSearch: false,
      searchQuery: {},
    };
  }

  updateData = (target, value) => {
    this.setState({ [target]: value });
  };

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Grid
          templateRows="50px 1fr 2fr 5fr 50px"
          h="100vh"
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
              />
            </Center>
          </GridItem>
          {this.state.advancedSearch && (
            <GridItem rowSpan={1} pl={2}>
              <Center h="100%" axis="both">
                <AdvancedSearchBar/>
              </Center>
            </GridItem>
          )}
          <GridItem
            rowSpan={this.state.advancedSearch ? 1 : 2}
            pl="2"
            bg="green.300"
          >
            Main
          </GridItem>
          <GridItem rowSpan={1} pl="2" bg="blue.300">
            Footer
          </GridItem>
        </Grid>
      </ChakraProvider>
    );
  }
}
