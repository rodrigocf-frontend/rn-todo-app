import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "../screens/Home";

export const storeData = async (data: AppState) => {
  try {
    await AsyncStorage.setItem("@appTasks", JSON.stringify(data));
  } catch (e) {
    throw Error("erro");
  }
};

export const loadData = async (): Promise<AppState> => {
  try {
    const data = await AsyncStorage.getItem("@appTasks");
    if (data) {
      const dataToJSON: AppState = JSON.parse(data);

      return dataToJSON;
    }
    return {} as AppState;
  } catch (e) {
    throw Error("erro");
  }
};
