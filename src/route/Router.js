import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawer from "./Drawer";
import JobDetail from "../screens/JobDetail";
import { Provider } from "react-redux";
import store from "../redux/store";

const Stack = createNativeStackNavigator();

export default Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Drawer"
            component={Drawer}
          />
          <Stack.Screen name="JobDetail" component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
