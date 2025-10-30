import "styled-components/native";

declare module "styled-components/native" {
  type AppColor = {
    BLUE_500: string;
    BLUE_900: string;
    PURPLE_500: string;
    PURPLE_900: string;
    GRAY_100: string;
    GRAY_200: string;
    GRAY_300: string;
    GRAY_400: string;
    GRAY_500: string;
    GRAY_600: string;
    GRAY_700: string;
    RED_500: string;
  };

  type AppFontFamily = {
    INTER_REGULAR: string;
    INTER_BOLD: string;
  };

  type AppSizes = {
    XSM: string;
    SM: string;
    NM: string;
  };

  export interface DefaultTheme {
    color: AppColor;
    fontFamily: AppFontFamily;
    size: AppSizes;
  }
}
