import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
  palette: {
    grey: {
      main: '#e0e0e0',
      contrastText: '#262b5c',
    },
    bg: {
      light: '#E5E5E5',
      dark: '#1D2330',
    },
    boxFill: {
      medium: '#D4D9E7',
      dark: '#313B4E',
      light: '#7EC8E3',
    },
    font: {
      dark: '#2F3A83',
      light: '#D0E2FF',
      subheading: '#0000DD',
      darker: '#050A30',
    },
    blueGradient: {
      dark: '#000C66',
      light: '#7EC8E3',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 16,
  },
}));

export default theme;