import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  colors: {
    searchbar: {
      background: '#006daa',
    },
    palette:{
        main : '#b9d6f2',
        blue : '#0353a4',
        darkblue : '#003559',
        lightgray : '#e8e8e8',
    }
  },
  styles: {
    global: {
      body: {
        bg: '#b9d6f2',
        fontFamily: 'Pretendard-Regular'
      },
    },
  },
});

export default theme;
