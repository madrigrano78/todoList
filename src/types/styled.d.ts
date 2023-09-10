import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      darkChecked: string;
      lightChecked: string;
      textColor: string;
      textMode: string;
      imageHeader: string;
    };
  }
}
