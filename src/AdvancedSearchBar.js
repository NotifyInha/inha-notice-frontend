import React from 'react';
import {
  Box,
  Input,
  Stack,
  Text,
  Checkbox,
  SimpleGrid,
} from '@chakra-ui/react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

import { RangeDatepicker } from 'chakra-dayzed-datepicker';

function MainSiteSelection({ getSource, updateSource }) {
  return (
    <Stack spacing="2px">
      <Text
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="palette.main"
      >
        주요 사이트
      </Text>

      <SimpleGrid columns={{ base: 2, sm: 2, md: 2, lg: 5 }} spacing="2px">
        <Checkbox
          lineHeight="1.43"
          fontWeight="regular"
          size={'md'}
          color="palette.main"
          isChecked={getSource(0)}
          onChange={e => updateSource(0, e.target.checked)}
        >
          전체공지
        </Checkbox>
        <Checkbox
          lineHeight="1.43"
          fontWeight="regular"
          size={'md'}
          color="palette.main"
          isChecked={getSource(1)}
          onChange={e => updateSource(1, e.target.checked)}
        >
          정석학술정보관
        </Checkbox>
        <Checkbox
          lineHeight="1.43"
          fontWeight="regular"
          size={'md'}
          color="palette.main"
          isChecked={getSource(2)}
          onChange={e => updateSource(2, e.target.checked)}
        >
          프런티어학부대학
        </Checkbox>
      </SimpleGrid>
    </Stack>
  );
}

function CollageSelection({ getSource, updateSource }) {
  let collageList = [
    '공과대학',
    '자연과학대학',
    '경영대학',
    '사범대학',
    '사회과학대학',
    '문과대학',
    '의과대학',
    '미래융합대학',
    '국제학부',
    '소프트웨어융합대학',
    '바이오시스템융합학부',
  ];

  return (
    <Stack spacing="2px">
      <Text
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="palette.main"
      >
        단과대학
      </Text>
      <SimpleGrid columns={{ base: 2, sm: 2, md: 2, lg: 5 }} spacing="2px">
        {collageList.map((collage, index) => (
          <Checkbox
            key={collage}
            lineHeight="1.43"
            fontWeight="regular"
            size={'md'}
            color="palette.main"
            isChecked={getSource(index + 3)}
            onChange={e => updateSource(index + 3, e.target.checked)}
          >
            {collage}
          </Checkbox>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

const inputRender = inputProps => {
  const { value, ...restProps } = inputProps;
  return <Input {...restProps} />;
};

function MajorSelection({ selectedmajors, onSelectedItemsChange }) {
  const majors = [
    { label: '자유전공학부', value: '자유전공학부' },

    { label: '기계공학과', value: '기계공학과' },
    { label: '항공우주공학과', value: '항공우주공학과' },
    { label: '조선해양공학과', value: '조선해양공학과' },
    { label: '산업경영공학과', value: '산업경영공학과' },
    { label: '화학공학과', value: '화학공학과' },
    { label: '고분자공학과', value: '고분자공학과' },
    { label: '신소재공학과', value: '신소재공학과' },
    { label: '사회인프라공학과', value: '사회인프라공학과' },
    { label: '환경공학과', value: '환경공학과' },
    { label: '공간정보공학과', value: '공간정보공학과' },
    { label: '건축학부(건축공학)', value: '건축학부(건축공학)' },
    { label: '건축학부(건축학)', value: '건축학부(건축학)' },
    { label: '에너지자원공학과', value: '에너지자원공학과' },
    { label: '전기공학과', value: '전기공학과' },
    { label: '전자공학과', value: '전자공학과' },
    { label: '정보통신공학과', value: '정보통신공학과' },
    { label: '반도체시스템공학과', value: '반도체시스템공학과' },

    { label: '수학과', value: '수학과' },
    { label: '통계학과', value: '통계학과' },
    { label: '물리학과', value: '물리학과' },
    { label: '화학과', value: '화학과' },
    { label: '식품영양학과', value: '식품영양학과' },

    { label: '경영학과', value: '경영학과' },
    { label: '글로벌금융학과', value: '글로벌금융학과' },
    { label: '아태물류학부', value: '아태물류학부' },
    { label: '국제통상학과', value: '국제통상학과' },
    { label: '기후위기대응(융합전공)', value: '기후위기대응(융합전공)' },

    { label: '국어교육과', value: '국어교육과' },
    { label: '영어교육과', value: '영어교육과' },
    { label: '사회교육과', value: '사회교육과' },
    { label: '교육학과', value: '교육학과' },
    { label: '체육교육과', value: '체육교육과' },
    { label: '수학교육과', value: '수학교육과' },

    { label: '행정학과', value: '행정학과' },
    { label: '정치외교학과', value: '정치외교학과' },
    { label: '미디어커뮤니케이션학과', value: '미디어커뮤니케이션학과' },
    { label: '경제학과', value: '경제학과' },
    { label: '소비자학과', value: '소비자학과' },
    { label: '아동심리학과', value: '아동심리학과' },
    { label: '사회복지학과', value: '사회복지학과' },
    { label: '기후위기대응(융합전공)', value: '기후위기대응(융합전공)' },

    { label: '한국어문학과', value: '한국어문학과' },
    { label: '사학과', value: '사학과' },
    { label: '철학과', value: '철학과' },
    { label: '중국학과', value: '중국학과' },
    { label: '일본언어문화학과', value: '일본언어문화학과' },
    { label: '영어영문학과', value: '영어영문학과' },
    { label: '프랑스언어문화학과', value: '프랑스언어문화학과' },
    { label: '문화콘텐츠문화경영학과', value: '문화콘텐츠문화경영학과' },

    { label: '의예과', value: '의예과' },
    { label: '의학과', value: '의학과' },
    { label: '간호학과', value: '간호학과' },

    { label: '조형예술학과', value: '조형예술학과' },
    { label: '스포츠과학과', value: '스포츠과학과' },
    { label: '연극영화학과', value: '연극영화학과' },
    { label: '의류디자인학과', value: '의류디자인학과' },
    { label: '국제학부', value: '국제학부' },

    { label: '인공지능공학과', value: '인공지능공학과' },
    { label: '데이터사이언스학과', value: '데이터사이언스학과' },
    { label: '스마트모빌리티공학과', value: '스마트모빌리티공학과' },
    { label: '디자인테크놀로지학과', value: '디자인테크놀로지학과' },
    { label: '컴퓨터공학과', value: '컴퓨터공학과' },
    { label: '바이오시스템융합학부', value: '바이오시스템융합학부' },
    { label: '생명공학과', value: '생명공학과' },
    { label: '바이오제약공학과', value: '바이오제약공학과' },
    { label: '생명과학과', value: '생명과학과' },
  ];

  return (
    <Stack spacing="2px">
      <Text
        
        fontWeight="regular"
        fontSize="18px"
        color="palette.main"
      >
        전공
      </Text>
      <CUIAutoComplete
        tagStyleProps={{
          rounded: 'full',
        }}
        placeholder="전공을 입력하세요"
        items={majors}
        disableCreateItem={true}
        hideToggleButton={true}
        selectedItems={selectedmajors}
        onSelectedItemsChange={changes =>
          onSelectedItemsChange(changes.selectedItems)
        }
        
        inputStyleProps={{ w: '30%', minW: '170px', color: 'palette.main' }}
        listStyleProps={{ maxH: '100px', overflowY: 'scroll' }}
        renderCustomInput={inputRender}
      />
    </Stack>
  );
}

function DateSelection({ dates, updateDate }) {
  return (
    <Stack spacing="2px">
      <Text
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="palette.main"
      >
        날짜
      </Text>
      <RangeDatepicker
        selectedDates={dates}
        onDateChange={updateDate}
        propsConfigs={{
          inputProps: {
            color: 'palette.main',
            borderRadius: '0.4rem',
            autoComplete: 'false',
          },
          dayOfMonthBtnProps: {
            defaultBtnProps: {
              borderColor: "red.300",
              _hover: {
                background: 'blue.400',
              }
            },
            isInRangeBtnProps: {
              bg: 'blue.300',
            },
            selectedBtnProps: {
              background: "palette.main",
            },
            todayBtnProps: {
              background: "palette.main",
            }
          }
        }}
      />
    </Stack>
  );
}

export default class AdvancedSearchBar extends React.Component {

  updateSourceFilter = (index, value) => {
    let b = 1 << index;
    if (value) {
      const newSourceFilter = this.props.sourcefilter | b;
      this.setState({ sourcefilter: newSourceFilter });
      this.props.updateQuery('sourcefilter', newSourceFilter);
    } else {
      const newSourceFilter = this.props.sourcefilter & ~b;
      this.setState({ sourcefilter: newSourceFilter });
      this.props.updateQuery('sourcefilter', newSourceFilter);
    }
  };

  getSourceFilter = index => {
    let b = 1 << index;
    return this.props.sourcefilter & b;
  };

  updateMajor = selectedItems => {
    if (selectedItems.length > 3) {
      alert('최대 3개까지 선택 가능합니다.');
    }
    selectedItems = selectedItems.slice(0, 3);
    this.props.updateQuery('major', selectedItems);
  };

  updateDate = selectedDates => {
    this.props.updateQuery('date', selectedDates);
  };

  render() {
    return (
      <Stack
        borderRadius="12px"
        width="52vw"
        height="34vh"
        maxWidth="100%"
        paddingTop={4}
        paddingLeft={8}
        paddingRight={8}
        paddingBottom={4}
        overflow={'auto'}
        bgColor={'palette.darkblue'}
        css={{
          '&::-webkit-scrollbar': {
            width: '18px',

            // backgroundColor: 'black'
          },
          // '&::-webkit-scrollbar-track': {
          //   width: '6px',
          // },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#0353a4',
            backgroundClip: 'padding-box',
            border: '5px solid transparent',
            borderRadius: '24px',
          },
        }}
      >
        <MainSiteSelection
          getSource={this.getSourceFilter}
          updateSource={this.updateSourceFilter}
        />
        <CollageSelection
          getSource={this.getSourceFilter}
          updateSource={this.updateSourceFilter}
        />

        <MajorSelection
          selectedmajors={this.props.majors}
          onSelectedItemsChange={this.updateMajor}
        />

        <Box w={'30%'} minW={'170px'}>
          <DateSelection
            dates={this.props.dates}
            updateDate={this.updateDate}
          />
        </Box>
      </Stack>
    );
  }
}
