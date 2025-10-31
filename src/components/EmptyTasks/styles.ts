import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 48px 0 0 0;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.color.GRAY_300};
`;

interface TitleProps {
  isBold?: boolean;
}

export const Wrapper = styled.View`
  margin: 0 0 16px 0;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme, isBold }) =>
    isBold ? theme.fontFamily.INTER_BOLD : theme.fontFamily.INTER_REGULAR};
  font-size: ${({ theme }) => theme.size.SM};
  color: ${({ theme }) => theme.color.GRAY_300};
`;
