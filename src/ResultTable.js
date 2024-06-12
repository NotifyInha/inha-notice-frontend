import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  ButtonGroup,
  Center,
  IconButton,
  Link,
  Flex,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';

const MAX_BUTTONS = 5; // 한 번에 표시할 최대 버튼 수

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageButtons = [];

  let startPage = Math.max(1, currentPage - Math.floor(MAX_BUTTONS / 2));
  let endPage = startPage + MAX_BUTTONS - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_BUTTONS + 1);
  }

  if (startPage > 1) {
    pageButtons.push(
      <Button key="first" onClick={() => onPageChange(1)}>
        1
      </Button>,
      <Button key="prev-ellipsis" disabled>
        ...
      </Button>
    );
  }

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <Button
        key={i}
        onClick={() => onPageChange(i)}
        colorScheme={currentPage === i ? 'blue' : 'gray'}
        variant={currentPage === i ? 'solid' : 'outline'}
      >
        {i}
      </Button>
    );
  }

  if (endPage < totalPages) {
    pageButtons.push(
      <Button key="next-ellipsis" disabled>
        ...
      </Button>,
      <Button key="last" onClick={() => onPageChange(totalPages)}>
        {totalPages}
      </Button>
    );
  }

  return (
    <Center>
      <ButtonGroup>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        />
        {pageButtons}
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        />
      </ButtonGroup>
    </Center>
  );
}

export default class ResultTable extends React.Component {

  updatePage = page => {
    if (page < 1 || page > this.props.totalPage) {
      return;
    }
    this.props.updatePage(page);
  };

  render() {
    const { searchResults, page, totalPage } = this.props;
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
        <Pagination
          currentPage={page}
          totalPages={totalPage}
          onPageChange={this.updatePage}
        />
      </div>
    );
  }
}
