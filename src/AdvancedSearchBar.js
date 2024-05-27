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

import { RangeDatepicker } from "chakra-dayzed-datepicker";
  

function MainSiteSelection() {
  return (
    <Stack spacing="2px">
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
      >
        주요 사이트
      </Text>

      <SimpleGrid minChildWidth="180px" spacing="2px">
        <Checkbox
          fontFamily="Inter"
          lineHeight="1.43"
          fontWeight="regular"
          size={'md'}
          color="gray.800"
        >
          전체공지
        </Checkbox>
        <Checkbox
          fontFamily="Inter"
          lineHeight="1.43"
          fontWeight="regular"
          size={'md'}
          color="gray.800"
        >
          정석학술정보관
        </Checkbox>
        <Checkbox
          fontFamily="Inter"
          lineHeight="1.43"
          fontWeight="regular"
          size={'md'}
          color="gray.800"
        >
          프런티어학부대학
        </Checkbox>
      </SimpleGrid>
    </Stack>
  );
}

function CollageSelection() {
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
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
      >
        단과대학
      </Text>
      <SimpleGrid minChildWidth="180px" spacing="2px">
        {collageList.map(collage => (
          <Checkbox
            key={collage}
            fontFamily="Inter"
            lineHeight="1.43"
            fontWeight="regular"
            size={'md'}
            color="gray.800"
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
    { label: '자유전공학부', value: 'las' },

    { label: '기계공학과', value: 'mech' },
    { label: '항공우주공학과', value: 'aerospace' },
    { label: '조선해양공학과', value: 'naoe' },
    { label: '산업경영공학과', value: 'ie' },
    { label: '화학공학과', value: 'chemeng' },
    { label: '고분자공학과', value: 'inhapoly' },
    { label: '신소재공학과', value: 'dmse' },
    { label: '사회인프라공학과', value: 'civil' },
    { label: '환경공학과', value: 'environment' },
    { label: '공간정보공학과', value: 'geoinfo' },
    { label: '건축학부(건축공학)', value: 'arch' },
    { label: '건축학부(건축학)', value: 'arch' },
    { label: '에너지자원공학과', value: 'eneres' },
    { label: '전기공학과', value: 'electrical' },
    { label: '전자공학과', value: 'ee' },
    { label: '정보통신공학과', value: 'ice' },
    { label: '반도체시스템공학과', value: 'sse' },

    { label: '수학과', value: 'math' },
    { label: '통계학과', value: 'statistics' },
    { label: '물리학과', value: 'physics' },
    { label: '화학과', value: 'chemistry' },
    { label: '식품영양학과', value: 'foodnutri' },

    { label: '경영학과', value: 'biz' },
    { label: '글로벌금융학과', value: 'gfiba' },
    { label: '아태물류학부', value: 'apsl' },
    { label: '국제통상학과', value: 'star' },
    { label: '기후위기대응(융합전공)', value: 'inhahuss' },

    { label: '국어교육과', value: 'koreanedu' },
    { label: '영어교육과', value: 'dele' },
    { label: '사회교육과', value: 'socialedu' },
    { label: '교육학과', value: 'education' },
    { label: '체육교육과', value: 'physicaledu' },
    { label: '수학교육과', value: 'mathed' },

    { label: '행정학과', value: 'publicad' },
    { label: '정치외교학과', value: 'political' },
    { label: '미디어커뮤니케이션학과', value: 'comm' },
    { label: '경제학과', value: 'econ' },
    { label: '소비자학과', value: 'consumer' },
    { label: '아동심리학과', value: 'child' },
    { label: '사회복지학과', value: 'welfare' },
    { label: '기후위기대응(융합전공)', value: 'inhahuss' },

    { label: '한국어문학과', value: 'korean' },
    { label: '사학과', value: 'history' },
    { label: '철학과', value: 'philosophy' },
    { label: '중국학과', value: 'chinese' },
    { label: '일본언어문화학과', value: 'japan' },
    { label: '영어영문학과', value: 'english' },
    { label: '프랑스언어문화학과', value: 'france' },
    { label: '문화콘텐츠문화경영학과', value: 'culturecm' },

    { label: '의예과', value: 'medicine' },
    { label: '의학과', value: 'medicine' },
    { label: '간호학과', value: 'nursing' },

    { label: '조형예술학과', value: 'finearts' },
    { label: '스포츠과학과', value: 'sport' },
    { label: '연극영화학과', value: 'theatrefilm' },
    { label: '의류디자인학과', value: 'fashion' },
    { label: '국제학부', value: 'sgcs' },

    { label: '인공지능공학과', value: 'doai' },
    { label: '데이터사이언스학과', value: 'datascience' },
    { label: '스마트모빌리티공학과', value: 'sme' },
    { label: '디자인테크놀로지학과', value: 'designtech' },
    { label: '컴퓨터공학과', value: 'cse' },
    { label: '바이오시스템융합학부', value: 'biosyst' },
    { label: '생명공학과', value: 'bio' },
    { label: '바이오제약공학과', value: 'biopharm' },
    { label: '생명과학과', value: 'biology' },
  ];

  return (
    <Stack>
      <Text
        fontFamily="Inter"
        lineHeight="1.56"
        fontWeight="regular"
        fontSize="18px"
        color="#000000"
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
        renderCustomInput={inputRender}
      />
    </Stack>
  );
}

export default class AdvancedSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  updateMajor = selectedItems => {
    this.props.updateQuery('major', selectedItems);
  };

  updateDate = selectedDates => {
    this.props.updateQuery('date', selectedDates);
  }

  render() {
    console.log(this.props.majors);

    return (
      <Stack
        borderRadius="12px"
        borderColor="#90CDF4"
        borderStartWidth="3px"
        borderEndWidth="3px"
        borderTopWidth="3px"
        borderBottomWidth="3px"
        width="52vw"
        height="34vh"
        maxWidth="100%"
        paddingTop={4}
        paddingLeft={8}
        paddingRight={8}
        paddingBottom={4}
        overflow={'auto'}
      >
        <MainSiteSelection />
        <CollageSelection />
        <Box w={'30%'} minW={'170px'}>
          <MajorSelection
            selectedmajors={this.props.majors}
            onSelectedItemsChange={this.updateMajor}
          />
        </Box>


      <RangeDatepicker
        selectedDates={this.props.dates}
        onDateChange={this.updateDate}
      />
      </Stack>
    );
  }
}
