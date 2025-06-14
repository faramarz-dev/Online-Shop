import type { Config } from "tailwindcss";
export const fontSize = {
  "3xs": "10px",
  "xxs": "12px",
  "xs": "13px",
  "sm": "14px",
  "md": "16px",
  "md-2": "15px",
  "lg": "18px",
  "xl": "20px",
  "2xl": "22px",
  "3xl": "58px",
};
export const boxShadow = {
  "1": "14px 14px 36px rgba(153, 153, 153, 0.22)",
  "2": "0px 45px 80px rgba(0, 0, 0, 0.04)",
  "3": "0px 47px 65px rgba(21, 28, 38, 0.1)",
  "4": "4px 6px 23px rgba(228, 92, 35, 0.1)",
  "5": "4px 4px 40px rgba(16, 24, 40, 0.1)",
  "6": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "inner": "inset 0px 40px 80px #FCFCFC",
};
export const colors = {
  "primary": {
    DEFAULT: '#1aaeed',
    disabled: '#bbe7fc',
    light: '#7fd3fa',
    dark: '#066a9e',
    50: '#f0f9ff',
    100: '#e1f2fd',
    200: '#bbe7fc',
    300: '#7fd3fa',
    400: '#3cbef4',
    500: '#1aaeed',
    600: '#0685c3',
    700: '#066a9e',
    800: '#095983',
    900: '#0e4b6c',
    950: '#093048',
  },

  secondary: {
    DEFAULT: '#9aa8ba',
    disabled: '#f5f6f8',
    light: '#c7d2da',
    dark: '#717c91',
    50: '#f5f6f8',
    100: '#ecf1f3',
    200: '#dce4e9',
    300: '#c7d2da',
    400: '#afbdca',
    500: '#9aa8ba',
    600: '#8d99ae',
    700: '#717c91',
    800: '#5d6776',
    900: '#4e5561',
    950: '#2e3238',
  },

  success: {
    DEFAULT: '#25a46d',
    disabled: '#b0eac9',
    light: '#7dd8ab',
    dark: '#126a48',
    50:  '#eefbf4',
    100: '#d6f5e2',
    200: '#b0eac9',
    300: '#7dd8ab',
    400: '#5bc694',
    500: '#25a46d',
    600: '#178457',
    700: '#126a48',
    800: '#11543a',
    900: '#0f4531',
    950: '#07271c',
  },
  danger: {
    DEFAULT: '#f53658',
    disabled: '#fecdd3',
    light: '#fea3af',
    dark: '#bf113c',
    50:  '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fea3af',
    400: '#fc7085',
    500: '#f53658',
    600: '#e21c48',
    700: '#bf113c',
    800: '#a0113a',
    900: '#891238',
    950: '#4d0419',
  },
 
  warning: {
    DEFAULT: '#ffb067',
    disabled:'#ffd4a9' ,
    light: '#ffd4a9',
    dark:'#ed5009',
    50:  '#fff6ed',
    100: '#ffecd4',
    200: '#ffd4a9',
    300: '#ffb067',
    400: '#fe8c39',
    500: '#fc6b13',
    600: '#ed5009',
    700: '#c53a09',
    800: '#9c2f10',
    900: '#7e2910',
    950: '#441206',
  },

  info: {
    DEFAULT: '#27b3d2',
    disabled:'#aee9f3',
    light: '#76d7ea',
    dark: '#1980a1',
    50:  '#eefbfd',
    100: '#d4f4f9',
    200: '#aee9f3',
    300: '#76d7ea',
    400: '#27b3d2',
    500: '#1a9fc0',
    600: '#1980a1',
    700: '#1b6883',
    800: '#1f556b',
    900: '#1e485b',
    950: '#0e2e3e',
  },
  "shop-gray": {
    50: "#F0F3F8",
    100: "#DDE4F0",
    200: "#CAD6EC",
    300: "#B2C2E1",
    400: "#9EB4E0",
    500: "#8C9EC5",
    600: "#718BC2",
    700: "#6B83B6",
    800: "#5971A3",
    900: "#425A8B",
    1000: "#0E224D",
    1100: "#253D4E",
    border: "#D5DFE4",
  },
  "shop-white": "#FFFFFF",
  "shop-green": "#00FF8A",
  "shop-yellow": "#FFF500",
  "shop-pink": "#FF6BC4",
  "shop-blue": "#3AA1FF",
  "shop-yellow2": "#F9D915",
  "shop-brown": "#AB5F3E",
  "shop-purple": "#9C79FF",
  "shop-disabled":"#CAD6EC",
  other: {
    1: "#EAE4E9",
    2: "#FFF3EA",
    3: "#FFF2F3",
    4: "#FFF1F6",
    5: "#DBECE5",
    6: "#E8FCFF",
    7: "#F0EFEB",
    8: "#DFE7FD",
    9: "#D1ECFD",
    10: "#DDD3FA",
    11: "#D4F7FF",
    12: "#D9D9D9",
    13: "#FFF4F6",
    14: "#E0F2EE",
    15: "#5C74A6",
    16: "#C8DCE8",
    17: "#C4E3D6",
    18: "#A4EEE1",
    19: "#CBE9FF",
    20: "#FFD5C8",
    21: "#CAEFDF",
    22: "#B8F2FF",
    23: "#F2DCCB",
    24: "#F9FAFB",
    25: "#f5f5f5",
    26: "#FFF5DB",
    27: "#F5ECDD",
    28: "#BAD0E7",
    29: "#FFDEBF",
    30: "#D6EFF2",
    31: "#F8FAFF",
    32: "#F9F9F9",
  }
};

export const screens={
  xs:"360px",
  sm:"480px",
  md:"768px",
  lg:"992px",
  xl:"1200px",
  "2xl":"1440px",
  "3xl":"1600px",
  "4xl":"1792px",
  "5xl":"1920px",
}

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: fontSize,
    boxShadow: boxShadow,
    screens: screens,
    extend: {
      colors: colors,
      animation: {
        fade: "fadeEffect 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-in-out",
        "slide-out": "slideOut 0.5s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },

  plugins: [
    function ({
      addVariant,
    }: {
      addVariant: (name: string, value: string) => void;
    }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};



export default config;
