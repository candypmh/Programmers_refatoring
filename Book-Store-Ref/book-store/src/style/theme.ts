export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third" | "border" | "text";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal";
export type LayoutWidth = "large" | "medium" | "small";

interface Theme{
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontsize: string; 
    };
  };
  button: {
    [key in ButtonSize]:{
      fontsize: string;
      padding: string; 
    };
  };
  buttonScheme:{
    [key in ButtonScheme]:{
      color: string; 
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "#ff5800",
    secondary: "#5F5F5F",
    background: "lightgray",
    third: "green",
    border: "grey",
    text: "black",
  },
  heading: {
    large: {
      fontsize: "2rem"
    },
    medium: {
      fontsize: "1.5rem"
    },
    small: {
      fontsize: "1rem"
    }
  },
  button: {
    large: {
      fontsize: "1.5rem",
      padding: "1rem 2rem"
    },
    medium: {
      fontsize: "1rem",
      padding: "0.5rem 1rem"
    },
    small: {
      fontsize: "0.75rem",
      padding: "0.25rem 0.5rem"
    },
  },
  buttonScheme: {
    primary: {
      color: "white",
      backgroundColor: "midnightblue",
    },
    normal: {
      color: "black",
      backgroundColor: "lightgrey",
    },
  },
  borderRadius:{
    default: "4px",
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "320px"
    },
  },

};

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    secondary: "blue",
    background: "midnightblue",
    third: "green",
    border: "grey",
    text: "black",
  },
};

export const getTheme = (themeName: ThemeName): Theme=>{
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};

