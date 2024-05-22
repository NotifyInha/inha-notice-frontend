import { Stack, Box, Text, Checkbox, Wrap, WrapItem, SimpleGrid } from '@chakra-ui/react';

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
      
      <Stack direction={['column', 'column', 'row']} spacing="24px">
        <Checkbox
          fontFamily="Inter"
          lineHeight="1.43"
          fontWeight="regular"
          size={"md"}
          color="gray.800"
        >
          전체공지
        </Checkbox>
        <Checkbox
          fontFamily="Inter"
          lineHeight="1.43"
          fontWeight="regular"
          size={"md"}
          color="gray.800"
        >
          정석학술정보관
        </Checkbox>
      </Stack>
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
      <SimpleGrid minChildWidth='180px' spacing="2px">
        {collageList.map(collage => (
            <Checkbox
              key={collage}
              fontFamily="Inter"
              lineHeight="1.43"
              fontWeight="regular"
              size={"md"}
              color="gray.800"
            >
              {collage}
            </Checkbox>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default function AdvancedSearchBar() {
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
    </Stack>
  );
}
