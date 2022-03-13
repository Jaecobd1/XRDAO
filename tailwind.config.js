module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/NFTS.png')",
      },
      colors:{  
        primary: '#36b2d7',
        secondary: '#f29667',
        SkyBlue: "#99e2ff",
        grey: "#192734",
        mediumGrey: "#7f7f7f",
        darkGrey: "#181818",
        purple: "#3d183d"
      },
      fontFamily:{
        p: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
