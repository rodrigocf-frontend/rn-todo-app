import styled from "styled-components/native";

export const Container = styled.View`
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

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.INTER_REGULAR};
  font-size: ${({ theme }) => theme.size.SM};
  color: ${({ theme }) => theme.color.GRAY_100};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
