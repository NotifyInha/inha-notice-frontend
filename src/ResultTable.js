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
  Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { tr } from 'date-fns/locale';

export default class ResultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail_index: -1,
      detail: null,
    };
  }

  handleClicked = async id => {
    if (this.state.detail_index == id) {
      this.setState({
        detail_index: -1,
        detail: null,
      });
      return;
    }
    const detail = await this.props.getDetail(id);
    this.setState({
      detail_index: id,
      detail: detail,
    });
  };

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        <TableContainer maxW={'90vw'}>
          <Table variant="simple" maxW={'90vw'}>
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
                  weekday: 'short',
                }).format(date);
                return (
                  <React.Fragment key={result._id}>
                    <Tr
                      key={index}
                      onClick={() => this.handleClicked(result._id)}
                    >
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
                    {this.state.detail_index == result._id && (
                      <Tr>
                        <Td colSpan={3} bgColor={'palette.lightgray'} borderRadius={10}>
                          <Box whiteSpace={'pre-wrap'}>
                            <Text overflowWrap={'break-word'}>
                              {`이미지: ${this.state.detail.images.length}개`}
                            </Text>
                          </Box>
                          <Box whiteSpace={'pre-wrap'} mb={1}>
                            <Text overflowWrap={'break-word'}>
                              {`첨부파일: ${this.state.detail.attached.length}개`}
                            </Text>
                          </Box>
                          <Box whiteSpace={'pre-wrap'}>
                            <Text overflowWrap={'break-word'}>
                              {this.state.detail.summary}
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                    )}
                  </React.Fragment>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
