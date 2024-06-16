import React from 'react';
import {
  Box,
  Spacer,
  Flex,
  Input,
  Button,
  Center,
  InputGroup,
  InputLeftElement,
  Circle,
} from '@chakra-ui/react';
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
        <Box w={'100%'}>
          <Center>
            <InputGroup size="md" w={'30%'} minW={'400px'}>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <SearchIcon color="palette.main" boxSize={4} opacity={1} />
                }
              />
              <Input
                type="text"
                placeholder="검색하기"
                borderLeftRadius={'full'}
                bgColor={'palette.darkblue'}
                focusBorderColor="transparent"
                border={'none'}
                color={'palette.main'}
                size="md"
                _placeholder={{
                  opacity: 0.8,
                  color: 'palette.main',
                  fontWeight: '100',
                }}
                
                onChange={e =>
                  this.props.updateQuery('keyword', e.target.value)
                }
              />
              <Button
                rightIcon={
                  this.props.advancedSearch ? (
                    <Circle bgColor={'palette.darkblue'} size={5}>
                      <ChevronUpIcon boxSize={4} color={'palette.main'} />
                    </Circle>
                  ) : (
                    <Circle bgColor={'palette.darkblue'} size={5}>
                      <ChevronDownIcon boxSize={4} color={'palette.main'} />
                    </Circle>
                  )
                }
                bgColor={'palette.blue'}
                color={'palette.main'}
                borderRightRadius={'full'}
                minW={'7rem'}
                onClick={this.updateAdvancedSearch}
                size="md"
                _hover={{ bg: 'palette.main', color: 'palette.darkblue' }}
              >
                상세검색
              </Button>
            </InputGroup>
          </Center>
        </Box>

        <Spacer />
      </Flex>
    );
  }
}
