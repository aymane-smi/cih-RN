import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

export default function DrawerProvider(){
    const Drawer = createDrawerNavigator();
    return  (<NavigationContainer></NavigationContainer>)
}