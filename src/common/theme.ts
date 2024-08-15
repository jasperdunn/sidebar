const palette = {
  main: {
    white: '#ffffff',
    deepSpace: '#0B0C10',
    deepOcean: '#161D27',
    grey_200: '#adb5bf',
    grey_400: '#6e757e',
    grey_800: '#202c3a',
    warning: '#ffd000',
    danger: '#f00',
  },
  category: {
    teal: '#00ab99',
  },
} as const;

export const theme = {
  color: {
    /**
     * white
     */
    primary: palette.main.white,
    /**
     * grey_200
     */
    secondary: palette.main.grey_200,
    /**
     * grey_400
     */
    tertiary: palette.main.grey_400,
    warning: palette.main.warning,
    danger: palette.main.danger,
  },
  backgroundColor: {
    /**
     * deepSpace
     */
    primary: palette.main.deepSpace,
    /**
     * deepOcean
     */
    secondary: palette.main.deepOcean,
  },
  borderColor: {
    /**
     * grey_800
     */
    secondary: palette.main.grey_800,
  },
  /**
   * These colors are intended to differentiate items by category.
   */
  categoryColor: {
    teal: {
      surface: palette.category.teal,
      text: palette.category.teal,
    },
  },
  fontSize: {
    extraSmall: '10px',
    small: '14px',
    medium: '16px',
    large: '20px',
    extraLarge: '36px',
  },
  fontWeight: {
    bold: 500,
    normal: 400,
    thin: 300,
  },
} as const;

export type Theme = typeof theme;
