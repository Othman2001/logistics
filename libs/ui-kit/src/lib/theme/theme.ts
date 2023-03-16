import { createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '#349AEC',
      secondaryLight: '#FFCC01',
      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

export default theme;
