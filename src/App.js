import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid, GridItem, Center
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SearchBar from './SearchBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"header header"
                  "SearchBar SearchBar"
                  "nav main"
                  "footer footer"`}
        gridTemplateRows={'50px 1fr 5fr 50px'}
        gridTemplateColumns={'150px 1fr'}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={'header'}>
          Header
        </GridItem>
        <GridItem pl="2" area={'SearchBar'}>
          <Center h='100%' axis='both'>
          <SearchBar/>
          </Center>
          </GridItem>
        <GridItem pl="2" bg="pink.300" area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'main'}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
