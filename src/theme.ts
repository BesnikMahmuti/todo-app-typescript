import { Theme, createTheme } from '@mui/material'

const white = '#fff'
const black = '#000'

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#3b3b3b',
      dark: '#000000',
      contrastText: white,
    },
    secondary: {
      main: white,
      light: '#6971FF',
      dark: '#001EB7',
      contrastText: black,
    },
    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
      contrastText: white,
    },
    warning: {
      main: '#FF9900',
      dark: '#F57C00',
      light: '#FFB74D',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
      contrastText: white,
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    grey: {
      '50': '#F9FAFC',
      '100': '#F0F2F5',
      '200': '#E7E9EC',
      '300': '#D7D9DC',
      '400': '#B4B5B8',
      '500': '#949598',
      '600': '#6C6D70',
      '700': '#58595C',
      '800': '#3A3B3E',
      '900': '#1A1B1D',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#7F7F7F',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: white,
      default: '#F8F8F8',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      color: '#000',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '24px',
    },
    body1: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
    },
    body2: {
      color: '#2E3033',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
    },
    h2: {
      color: 'var(--Gray-600, #6C6D70)',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '22px',
    },
    h3: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '24px',
    },
    h4: {
      color: 'black',
      fontSize: '24px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    h5: {
      color: 'var(--Gray-500, #949598)',
      fontFamily: 'Inter',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
    },
    h6: {},
    button: {
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '28px',
          border: '1px solid var(--Gray-300, #D7D9DC)',
          background: 'var(--Text-White, #FFF)',
          boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'start',
          paddingLeft: 0,
          paddingBottom: '16px',
          paddingTop: '20px',
          marginLeft: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          display: 'inline-flex',
          padding: '10px 20px',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Inter',
          gap: '8px',
          borderRadius: '25px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          borderRadius: '28px',
          background: 'rgba(51, 204, 170, 0.20)',
          borderColor: '#33CCAA33',
          display: 'inline-flex',
          padding: '2px 10px',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--Primary-Dark, #008060)',
          fontFamily: 'Inter',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
        },
        colorSecondary: {
          display: 'inline-flex',
          padding: '2px 10px',
          alignItems: 'center',
          gap: '8px',
          color: '#0945EB',
          borderRadius: '28px',
          background: 'rgba(105, 113, 255, 0.16)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {},
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          paddingRight: '70px',
          alignItems: 'center',
          gap: '16px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          padding: '40px 64px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          display: 'flex',
          paddingBottom: '40px',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        },
      },
    },
  },
})
