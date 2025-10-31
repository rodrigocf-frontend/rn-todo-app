import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "../screens/Home";

export const storeData = async (data: AppState) => {
  try {
    await AsyncStorage.setItem("@appTasks", JSON.stringify(data));
  } catch (e) {
    throw Error("Failed to save data.");
  }
};

export const loadData = async (): Promise<AppState> => {
  try {
    const data = await AsyncStorage.getItem("@appTasks");

    if (data) {
      const dataToJSON: AppState = JSON.parse(data);

      return dataToJSON;
    }
    return {
      lastId: 0,
      tasks: [],
    } as AppState;
  } catch (e) {
    throw Error("failed to load data.");
  }
};
