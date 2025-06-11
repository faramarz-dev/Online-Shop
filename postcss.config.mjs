/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    "tailwindcss/nesting": {}, // از پلاگین جدید استفاده کنید
  },
};

export default config;