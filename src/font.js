import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
     @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
      `}
  />
);

export default Fonts;
