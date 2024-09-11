import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorite from "../screens/Favorite";
import Jobs from "../screens/Jobs";

const Drawer = createDrawerNavigator();

export default MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen
        options={{
          drawerLabel: "Favorited Jobs",
        }}
        name="Favorite"
        component={Favorite}
      />
    </Drawer.Navigator>
  );
};
