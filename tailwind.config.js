module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          green: "var(--primary-green)",
          blue: "var(--primary-blue)",
          red: "var(--primary-red)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          light: "var(--text-light)",
          white: "var(--text-white)",
          green: "var(--text-green)",
          blue: "var(--text-blue)"
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          light: "var(--bg-light)",
          green: "var(--bg-green)",
          red: "var(--bg-red)",
          darkGray: "var(--bg-dark-gray)",
          overlay: {
            light: "var(--bg-overlay-light)",
            dark: "var(--bg-overlay-dark)"
          }
        },
        // Border Colors
        border: {
          light: "var(--border-light)",
          medium: "var(--border-medium)",
          white: "var(--border-white)"
        },
        // Component Colors
        header: {
          text: "var(--header-text)",
          textLight: "var(--header-text-light)"
        },
        button: {
          primary: "var(--button-bg-primary)",
          danger: "var(--button-bg-danger)",
          text: "var(--button-text)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        link: {
          text: "var(--link-text)"
        },
        explore: {
          background: "var(--explore-bg)"
        }
      },
      // Typography
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)'
      },
      // Spacing
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)'
      },
      // Border Radius
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)'
      }
    }
  },
  plugins: []
};