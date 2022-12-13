//@type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'title': '#2E4156',
        'green-bg': '#007D75',
        'blue': '#587490',
        'gray': '#DCE4F1',
        'lines': '#EEF1F4',
      },
    },
    fontSize: {
      'h1': ['4.25rem', { //68px
        lineHeight: '3.825rem',
        // fontFamily:'Futura PT Medium',
      }],
      'h2': ['3.5rem', {  //56px
        lineHeight: '3.5rem',
        // fontFamily:'Futura PT Medium',
      }],
      'h3': ['2.75rem', {  //44px
        lineHeight: '2.75rem',
        // fontFamily:'Futura PT Medium',
      }],
      'h4': ['2rem', {   //32px
        lineHeight: '2rem',
        // fontFamily:'Futura PT Medium',
      }],
      'p1-R': ['1.5rem', {   //24px
        lineHeight: '1.25rem',
        // fontFamily:'Futura PT Book',
      }],
      'p2-R': ['1.25rem', {   //20px
        lineHeight: '1.5rem',
        // fontFamily:'Futura PT Book',
      }],
      'p3-R': ['1rem', {   //16px
        lineHeight: '1.2rem',
        // fontFamily:'Futura PT Book',
      }],
      'p4-R': ['0.875rem', {   //14px
        lineHeight: '1.05rem',
        // fontFamily:'Futura PT Book',
      }],
      'p1-M': ['1.5rem', {   //24px
        lineHeight: '1.25rem',
        // fontFamily:'Futura PT Medium',
      }],
      'p2-M': ['1.25rem', {   //20px
        lineHeight: '1.5rem',
        // fontFamily:'Futura PT Medium',
      }],
      'p3-M': ['1rem', {   //16px
        lineHeight: '0.9rem',
        // fontFamily:'Futura PT Medium',
      }],
      'p4-M': ['0.875rem', {   //14px
        lineHeight: '1.7875rem',
        // fontFamily:'Futura PT Medium',
      }],
    }
  },
  plugins: [],
}
