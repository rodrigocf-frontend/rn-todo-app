import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_500};
  border: 1px solid ${({ theme }) => theme.color.GRAY_400};
  padding: 12px 8px 12px 12px;
  border-radius: 8px;
  gap: 8px;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 4;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

type TitleProps = {
  hasLineThrough: boolean;
};

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.INTER_REGULAR};
  font-size: ${({ theme }) => theme.size.SM};
  color: ${({ theme, hasLineThrough }) =>
    hasLineThrough ? theme.color.GRAY_300 : theme.color.GRAY_100};
  max-width: 90%;
  ${({ hasLineThrough }) => hasLineThrough && "text-decoration: line-through;"}
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
