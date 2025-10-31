import { Alert } from "react-native";

export const AppError = (err: Error) => {
  return Alert.alert("Error", err.message);
};
