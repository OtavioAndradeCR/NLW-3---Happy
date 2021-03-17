import "styled-componets";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    backgroundImage: string;
    colors: {
      landingBackground: string;
      background: string;
      backgroundPanel: string;
      colorText: string;
      borderColor: string;
      textAreaColor: string;
      textAreaLabels: string;
    };
  }
}
