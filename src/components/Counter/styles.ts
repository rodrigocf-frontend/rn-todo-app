import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export interface LabelProps {
  labelColor?: keyof DefaultTheme["color"];
}

export const Label = styled.Text<LabelProps>`
  font-family: ${({ theme }) => theme.fontFamily.INTER_BOLD};
  font-size: ${({ theme }) => theme.size.SM};
  color: ${({ labelColor = "GRAY_100", theme }) => theme.color[labelColor]};
`;

export const Wrapper = styled.View`
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.color.GRAY_400};
  border-radius: 999px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.INTER_BOLD};
  font-size: ${({ theme }) => theme.size.XSM};
  color: ${({ theme }) => theme.color.GRAY_200};
`;
