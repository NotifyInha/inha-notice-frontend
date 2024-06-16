import React from 'react';
import { Button, ButtonGroup, Center, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const MAX_BUTTONS = 5; // 한 번에 표시할 최대 버튼 수

export default class Pagination extends React.Component {
  updatePage = page => {
    if (page < 1 || page > this.props.totalPages) {
      return;
    }
    this.props.onPageChange(page);
  };

  render() {
    const { currentPage, totalPages  } = this.props;
    const pageButtons = [];
    let startPage = Math.max(1, currentPage - Math.floor(MAX_BUTTONS / 2));
    let endPage = startPage + MAX_BUTTONS - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - MAX_BUTTONS + 1);
    }

    if (startPage > 1) {
      pageButtons.push(
        <Button key="first" onClick={() => this.updatePage(1)}>
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
          onClick={() => this.updatePage(i)}
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
        <Button key="last" onClick={() => this.updatePage(totalPages)}>
          {totalPages}
        </Button>
      );
    }

    return (
      <Center>
        <ButtonGroup>
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => this.updatePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          />
          {pageButtons}
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={() => this.updatePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          />
        </ButtonGroup>
      </Center>
    );
  }
}
