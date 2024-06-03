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
  Center
} from '@chakra-ui/react';

export default class ResultTable extends React.Component {
  render() {
    const { searchResults, page, totalPage, updatePage } = this.props;
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
              {searchResults.map((result, index) => (
                <Tr key={index}>
                  <Td>{result.source}</Td>
                  <Td>{result.title}</Td>
                  <Td>{result.published_date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Center>
          <ButtonGroup>
            {Array.from({ length: totalPage }, (_, i) => i + 1).map(p => (
              <Button
                key={p}
                onClick={() => updatePage(p)}
                isActive={p === page}
              >
                {p}
              </Button>
            ))}
          </ButtonGroup>
        </Center>
      </div>
    );
  }
}
