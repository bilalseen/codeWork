import { createDrawerNavigator } from "@react-navigation/drawer";
import JobDetail from "../screens/JobDetail";
import Jobs from "../screens/Jobs";

const Drawer = createDrawerNavigator();

export default MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen name="JobDetail" component={JobDetail} />
    </Drawer.Navigator>
  );
};
