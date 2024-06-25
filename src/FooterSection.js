import {
  Box,
  Link,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';

let ListMaker = ({ title, content }) => {
  return (
    <Stack align={'flex-start'} w={'300px'}>
      <Text fontWeight={'700'} fontSize={'lg'} mb={2} color={'palette.main'}>
        {title}
      </Text>
      <Text fontWeight={'300'} color={'palette.main'} opacity={'0.8'}>
        {content.map((collage, index) => (
          <Text>{collage}</Text>
        ))}
      </Text>
    </Stack>
  );
};

export default function FooterSection() {
  return (
    <Stack>
      <Text pt={6} fontSize={'sm'} textAlign={'center'}>
        © 2024. Myeonghun All rights reserved.
      </Text>

      <Box bg={'palette.darkblue'} w={'80vw'} borderTopRadius="1rem">
        {/* <Container as={Stack} maxW={'6xl'} py={10}> */}
        <Flex p={10} justifyContent={'space-between'} wrap={'wrap'}>
          <ListMaker
            title={'About'}
            content={[
              'NotifyInha는 인하대학교의 공지사항을 한눈에 볼 수 있도록 제공하는 서비스입니다.',
              '공지사항을 효율적으로 관리하고, 놓치지 않도록 도와줍니다.',
            ]}
          />
          <ListMaker
            title={'Developer Info'}
            content={[
              '정명훈',
              '소속 : 인하대학교 컴퓨터공학과',
              'Email : myeonghun1212@gmail.com',
            ]}
          />
          <ListMaker
            title={'Feedback'}
            content={[
              '사이트 이용 중 불편한 점이나 개선할 점이 있다면 알려주세요.',
              '여러분의 소중한 의견을 기다립니다.',
              <Link href="https://forms.gle/85sPfctUiJW1kZoa6">
                피드백 보내기
              </Link>,
            ]}
          />
          <ListMaker
            title={'Follow Us'}
            content={[
              <Link href={'https://github.com/NotifyInha'}>Github</Link>,
            ]}
          />
        </Flex>
        {/* </Container> */}
        <Box py={10}>
          {/* make Text Centered */}

          <Text color={'gray.400'} textAlign={'center'}>
            본 사이트의 모든 공지사항은 인하대학교 및 관련 기관에서 게시한
            내용을 수집한 것입니다. 공지사항의 저작권은 해당 기관에 있으며,
            NotifyInha는 이에 대한 책임을 지지 않습니다.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}
