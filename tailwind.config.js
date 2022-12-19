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
       // fontFamily:'Futura PT Medium',
      'h1': ['4.25rem', { //68px
        lineHeight: '3.825rem', //90%
      }],
      'h1-sm': ['3rem', {  //48px
        lineHeight: '2.7rem', //90%
      }],
      'h2': ['3.5rem', {  //56px
        lineHeight: '3.5rem', //100%
      }],
      'h2-sm': ['2.375rem', {  //38px
        lineHeight: '2.375rem', //100%
      }],
      'h3': ['2.75rem', {  //44px
        lineHeight: '2.75rem', //100%
      }],
      'h4': ['2rem', {   //32px
        lineHeight: '2rem',  //100%
      }],
      'p1-M': ['1.5rem', {   //24px
        lineHeight: '1.8rem',   //120%
      }],
      'p2-M': ['1.25rem', {   //20px
        lineHeight: '1.5rem',  //120%
      }],
      'p2-M1': ['1.125rem', {   //18px
        lineHeight: '1.2375rem',  //110%
      }],
      'p3-M': ['1rem', {   //16px
        lineHeight: '0.9rem', //90%
      }],
      'p3-M1': ['1rem', {   //16px
        lineHeight: '1.1rem', //110%
      }],
      'p4-M': ['0.875rem', {   //14px
        lineHeight: '1.7875rem', //90%
      }],
      // fontFamily:'Futura PT Book',
      'p1-R': ['1.5rem', {   //24px
        lineHeight: '1.8rem',    //120%
      }],
      'p2-R': ['1.25rem', {   //20px
        lineHeight: '1.5rem',  //120%
      }],
      'p2-R-sm': ['1.125rem', {   //18px
        lineHeight: '1.35rem',   //120%
      }],
      'p3-R': ['1rem', {   //16px
        lineHeight: '1.2rem', //120%
      }],
      'p3-R1': ['1rem', {   //16px
        lineHeight: '1.3rem', //130%
      }],
      'p4-R': ['0.875rem', {   //14px
        lineHeight: '1.05rem',  //120%
      }],
    }
  },
  plugins: [],
}
