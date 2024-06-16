import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Link,
  Flex,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import {
  ExternalLinkIcon,
} from '@chakra-ui/icons';

export default class ResultTable extends React.Component {

  updatePage = page => {
    if (page < 1 || page > this.props.totalPage) {
      return;
    }
    this.props.updatePage(page);
  };

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        <TableContainer maxW={'90vw'}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>사이트</Th>
                <Th>제목</Th>
                <Th>날짜</Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchResults.map((result, index) => {
                const date = new Date(result.published_date);
                const formattedDate = new Intl.DateTimeFormat('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'short'
                }).format(date);
                return (
                  <Tr key={index}>
                    <Td>{result.source}</Td>
                    <Td>
                      <Flex align="center">
                        <Text mr={2}>{result.title}</Text>
                        <Tooltip label="새 탭에서 공지 열기">
                          <Link href={result.url} isExternal>
                            <IconButton
                              icon={<ExternalLinkIcon />}
                              aria-label="Open link"
                              variant="ghost"
                              size="sm"
                            />
                          </Link>
                        </Tooltip>
                      </Flex>
                    </Td>
                    <Td>{formattedDate}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        
      </div>
    );
  }
}
