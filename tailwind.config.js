module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '4xl': { max: '4000px' },
      '3xl': { max: '1920px' },
      '2xl': { max: '1500px' },

      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
    rotate: {
      180: '180deg',
      270: '270deg',
      90: '-90deg',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      gray: {
        DEFAULT: '#818181',
        100: '#C2C2C2',
        200: '#FAFAFA',
      },
      blue: {
        DEFAULT: '#00458b',
        200: '#00458b',
        300: '#075FE4',
        500: '#1B57ED',
        450: '#0066ff !important',
        600: '#00458b',
        601: '#00A6D1',
        650: '#232053',
        700: '#11113096',
        800: '#393384',
        950: '#312C77',
        850:"#00008B",
      },
      grey: {
        150: '#F5F5F7',
        200: '#FEFEFE',
        300: '#F7F7F7',
        350: '#F1F1F1',
        400: '#73859736',
        450: '#E6EAF1',
        500: '#F8F9FD',
        600: '#EEEEEE',
        700: '#F3F3F3',
        800: '#F5F5F5',
        900: '#F9F9F9',
      },
      green: {
        DEFAULT: '#00A1A2',
        100: '#30b457',
        200: '#04160ee0',
      },
      white: '#ffff',
      black: { 100: '#111136' },
    }),
    extend: {
      scale: {
        0.3: '.3',
        0.5: '.5',
        1: '1',
      },
      flex: {
        0: '0 0 auto',
      },
      borderRadius: {
        5: '0.313rem',
        20: '1.25rem',
      },
      padding: {
        26: '7.5rem',
      },
      width: {
        8: '8.375rem',
        168: '42.125rem',
        124: '31.25rem',
        127: '34.625rem',
        128: '36rem',
        168: '42.125rem',
        173: '10.813rem',
        112: '28.75rem',
        361: '22.563rem',
        527: '32.938rem',
        567: '22.938rem',
        536: '33.5rem',
        250: '15.625rem',
        275: '17.188rem',
        536: '33.5rem',
        275: '17.188rem',
        650: '40.625',
        690: '43.125rem',
        474: '29.625rem',
        536: '33.5rem',
        212: '13.25rem',
        292: '18.25rem',
        275: '17.188rem',
        342: '21.375rem',
        351: '21.938rem',
        416: '26rem',
        420: '26.25rem',
        536: '33.5rem',
        545: '34.625rem',
        554: '34.625rem',
        690: '43.125rem',
        652: '40.75rem',
        700: '43.75rem',
        800: '50rem',
        826: '51.625rem',
        173: '10.813rem',
        1050: '65.625rem',
        1088: '68rem',
        1140: '71.25rem',
        1200: '75rem',
        1450: '90.625rem',
        1750: '109.375rem',
        934: '58.375rem',
        980: '61.25rem',
        300: 'calc(100% - 14rem)',
        233: 'calc(100vw - 200px)',
      },
      height: {
        90: '5.625rem',
        120: '30rem',
        543: '33.375rem',
        120: '30rem',
        539: '35.563rem',
        661: '41.313rem',
        543: '33.375rem',
        212: '13.25rem',
        256: '16rem',
        275: '17.188rem',
        300: '18.75rem',
        342: '21.375rem',
        351: '21.938rem',
        420: '26.25rem',
        536: '33.5rem',
        544: '34rem',
        554: '34.625rem',
        608: '38rem',
        690: '43.125rem',
        173: '10.813rem',
        1796: '112.25rem',
        37: '9.313rem',
        100: 'fit-content',
      },
      borderRadius: {
        5: '0.313rem',
      },
      padding: {
        30: '1.875rem',
        134: '8.375rem',
        258: '16.125rem',
        126: '7.875rem',
        74: '4.625rem',
        257: '16.063rem',
        59: '3.688rem',
        258: '16.125rem',
        61: '3.813rem',
        38: '2.375rem',
        140: '8.75rem',
        31: '1.938rem',
        139: '8.688rem',
        38: '2.375rem',
        140: '8.75rem',
      },

      margin: {
        15: '0.938rem',
        25: '1.563rem',
        34: '2.125rem',
        50: '3.125rem',
        30: '1.875rem',
        34: '2.125rem',
        50: '3.125rem',
        72: '4.5rem',
        126: '7.875rem',
      },

      fontSize: {
        10: '0.625rem',
        22: '1.375rem',
        26: '1.625rem',
        37: '2.313rem',
        60: '3.75rem',
        178: '11.125rem',
        32: '2rem',
        98: '6.125rem',
        42: '2.625rem',
      },
      colors: {
        blue: {
          50: '#025FA11A',
          80: '#0066FF1A',
          90: '#0066FF',
          100: '#F2F8FF',
          150: '#025FA11F',
          200: '#F1F4F8',
          250: '#E2E9F7',
          DEFAULT: '#1B57ED',
          300: '#CCE0FF',
          350: '#006BB6',
          400: '#0066FF33',
          450: '#393384',
          500: '#1B57ED',
          600: '#111136',
          650: '#232053',
          700: '#1D56E3',
          750: '#393384',
          800: '#0066FF42',
          900: '#014A8D',
          950: '#312C77',
          1000: '#17A8DF',
          1050: '#2F73C0',
          1100: '#00A8DF',
          850:"#00008B"
        },
        grey: {
          100: '#FCFCFC',
          150: '#F5F5F7',
          200: '#FAFAFA',
          250: '#B3B3B3',
          300: '#F7F7F7',
          350: '#F5F5F5',
          400: '#323232',
          450: '#8B8B8B',
          DEFAULT: '#DCDCDC',
          500: '#313131',
          550: 'D4D4D473',
          600: '#707070',
          700: '#738597',
          800: '#11113633',
        },
        purple: {
          100: '#ECE9F1',
        },
        yellow: {
          100: '#F7BA3F',
          DEFAULT: '#F8A609',
          150: '#FFED00',
        },
        red: {
          100: '#E71A1AA6',
          DEFAULT: '#D85A5A',
          200: '#F54F4A',
          250: '#F75C3F',
          300: '#C33535',
          500: '#DC4242',
          550: 'rgba(255,0,0)',
        },
        green: {
          DEFAULT: '#00A1A2',
        },
        white: '#ffff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        PopinsMedium: ['Poppins', 'medium'],
      },
      minHeight: {
        40: '40vh',
        80: 'calc(100vh - 7rem)',
        100: 'fit-content',
        400: '25rem',
      },
      minWidth: {
        96: '24rem',
      },
      flex: {
        0.1: '0.1',
        0.2: '0.2',
        0.3: '0.3',
        0.4: '0.4',
        0.5: '0.5',
        0.6: '0.6',
        0.7: '0.7',
        0.8: '0.7',
        0.9: '0.9',
      },
      boxShadow: {
        1: '0px 20px 60px #11113626',
        2: '0px 0px 4px rgba(0, 0, 0, 0.3)',
          sm: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
          dropdown: '1px 1px 8px 0.5px rgba(0, 0, 0, 0.16)',
          dropdown_2: '0px 5px 11px -2px rgba(0, 0, 0, 0.16)',
          hovered:
            'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        
      },
      boxShadow: {
        1: '0px 20px 60px #11113626',
        2: '0px 0px 4px rgba(0, 0, 0, 0.3)',
        sm: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
        dropdown: '1px 1px 8px 0.5px rgba(0, 0, 0, 0.16)',
        dropdown_2: '0px 5px 11px -2px rgba(0, 0, 0, 0.16)',
        hovered:
          'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      },
      gridTemplateRows: {
        10: 'repeat(10, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        469: '29.313rem auto',
        500: ' calc(29.313rem - 7rem) auto',
        600: ' 13rem auto',
        601: ' 10rem auto',
      },
    },
    variants: {
      extend: {
        fill: ['hover', 'focus'],
        height: ['hover', 'focus'],
        placeholderColor: ['hover', 'active'],
      },
    },
    plugins: [],
  },
};
