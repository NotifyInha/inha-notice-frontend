import { Box, Spacer, Flex, Input, Button } from '@chakra-ui/react';
// import { GoSearch } from 'react-icons/go';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

function SearchBar() {
  return (
    <Flex
    w="100%">
        <Spacer/>
      <Input
        placeholder="검색어를 입력하세요"
        size="lg"
        width="655px"
        height="48px"
        maxWidth="100%"
      />
      <Button
        rightIcon={<ChevronDownIcon />}
        colorScheme="blue"
        variant="solid"
        size="lg"
        
      >
        상세검색
      </Button>
      <Spacer/>
    </Flex>
  );
}

export default SearchBar;
