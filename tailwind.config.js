module.exports = {
    plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio'),  ],

    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "light",
    },

    theme: {
      extend: {
        colors: {
          truflation: {
            800: "#002152",
            700: "#0A3170",
            600:  "#0B4299",
            500: "#0D58C6",
            400: "#6EA8FF",
            300: "#ADCEFF",
            200: "#E5F0FF",
            100: "#FAFCFF",
          },
          blue: {
            800: "#103262",
            700: "#1F5199",
            600:  "#2E72D2",
            500: "#458FFF",
            400: "#7CBBFF",
            300: "#B3D9FF",
            200: "#DAECFF",
            100: "#EFF6FF",
          },
          neutral: {
            800: "#11171D",
            700: "#202C37",
            600:  "#394960",
            500: "#62768A",
            400: "#99ADBD",
            300: "#C4D0D9",
            200: "#ECEFF2",
            100: "#F9FAFB",
          },
          indigo: {
            800: "#312E81",
            700: "#4338CA",
            600:  "#4F46E5",
            500: "#6366F1",
            400: "#7A85FF",
            300: "#9EA6FF",
            200: "#C5C5FC",
            100: "#F5F3FF",
          },
          red: {
            800: "#7F1D1D",
            700: "#BE1F1F",
            600:  "#D63434",
            500: "#FB5A5A",
            400: "#FF7D7D",
            300: "#FEAAAA",
            200: "#FCCFCF",
            100: "#FEF2F2",
          },
          green: {
            800: "#003D2C",
            700: "#005E46",
            600:  "#008060",
            500: "#00A47C",
            400: "#00D19E",
            300: "#ACECD2",
            200: "#E6F4EE",
            100: "#F0FDF4",
          },
          yellow: {
            800: "#B45309",
            700: "#D97706",
            600:  "#F59E0B",
            500: "#FFC44C",
            400: "#FFE18F",
            300: "#FFEEB3",
            200: "#FFF5CC",
            100: "#FFFBEB",
          },
        }
      }
    }
  };
