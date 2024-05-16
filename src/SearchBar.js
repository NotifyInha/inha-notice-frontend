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
function SearchBar() {
  return (
    <Flex w="100%">
      <Spacer />
      <form style={{ width: '100%' }}
        onSubmit={() => {
          window.alert('submit');
        }}
      >
        <Center>
          <Input
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
            type="submit"
          />
          <Button
            rightIcon={<ChevronDownIcon />}
            colorScheme="blue"
            variant="solid"
            size="lg"
            width="12.5vmin"
            height="4.8vmin"
            fontSize="1.5vmin"
          >
            상세검색
          </Button>
        </Center>
      </form>

      <Spacer />
    </Flex>
  );
}

export default SearchBar;
