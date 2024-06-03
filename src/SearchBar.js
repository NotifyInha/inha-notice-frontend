import React from 'react';
import {
  Box,
  Spacer,
  Flex,
  Input,
  Button,
  IconButton,
  Center,
} from '@chakra-ui/react';
// import { GoSearch } from 'react-icons/go';
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.updateAdvancedSearch = this.updateAdvancedSearch.bind(this);
  }

  updateAdvancedSearch() {
    this.props.updateData('advancedSearch', !this.props.advancedSearch);
  }

  render() {
    return (
      <Flex w="100%">
        <Spacer />
        <Box
          w={"100%"}
        >
          <Center>
            <Input
              name="keyword"
              placeholder="검색어를 입력하세요"
              borderColor={'blue.300'}
              focusBorderColor="blue.300"
              size="lg"
              width="34%"
              height="4.8vmin"
              maxWidth="100%"
              mr="1.3vw"
              fontSize="2vmin"
            />
            <IconButton
              variant="outline"
              colorScheme="blue"
              aria-label="Search database"
              h="4.8vmin"
              w="4.8vmin"
              mr="1.3vw"
              icon={<SearchIcon />}
              onClick={ this.props.search}
            />
            
            <Button
              rightIcon={
                this.props.advancedSearch ? <ChevronUpIcon /> : <ChevronDownIcon />
              }
              colorScheme="blue"
              variant="solid"
              size="lg"
              width="12.5vmin"
              height="4.8vmin"
              fontSize="1.5vmin"
              onClick={this.updateAdvancedSearch}
            >
              상세검색
            </Button>
          </Center>
        </Box>

        <Spacer />
      </Flex>
    );
  }
}
