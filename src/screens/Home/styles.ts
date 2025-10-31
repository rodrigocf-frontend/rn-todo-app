import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 0 24px 0 24px;
  background-color: ${({ theme }) => theme.color.GRAY_700};
  flex: 1;
  z-index: 1;
`;

export const Logo = styled(Image).attrs({
  source: require("../../../assets/logo.png"),
})`
  margin: 24px auto 40px auto;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background-color: ${({ theme }) => theme.color.BLUE_900};
  padding: 18px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 5.3;
  background-color: ${({ theme }) => theme.color.GRAY_600};
  padding: 55px 24px 0 24px;
`;

export const CounterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
