import { DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import { Dimensions, Image, View, StatusBar, Text,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Transaction from "../assets/transaction.svg";
import Account from "../Screens/Account";

export default function DrawerProvider(){
    const [fontsLoaded] = useFonts({
        "Poppins-SemiBold": require("../assets/Poppins/Poppins-SemiBold.ttf"),
    });
    const Drawer = createDrawerNavigator();
    return  (<NavigationContainer>
        <Drawer.Navigator screenOptions={{ 
            headerShown: false,
            drawerStyle:{
                width: Dimensions.get("screen").width,
            },
            drawerActiveBackgroundColor: "#fef7f4",
            drawerActiveTintColor: "#f27845",
            drawerLabelStyle: {
                marginLeft: -15
            },
            drawerItemStyle: {
                width: '100%',
                marginLeft:0,
                borderRadius: 0,
                marginTop: 5,
                paddingHorizontal: 20,
                paddingVertical: 0
            },
         }} drawerContent={(props)=>{
            return(<DrawerContentScrollView {...props} style={{ marginTop: 40 }}>
                <StatusBar/>
                <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", width: Dimensions.get("screen").width}}>
                <Image source={require("../assets/icon-cih.png")} style={{width: 50, height: 50}}/>
            </View>
            <DrawerItemList {...props}/>
            </DrawerContentScrollView>)
         }}>
            <Drawer.Screen name="Home" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <AntDesign name="home" size={24} color={color} />
                ),
                drawerLabel: "Home",
            }}/>
            <Drawer.Screen name="Account" component={Account} options={{
                
                drawerIcon: ({color})=>(
                    <Ionicons name="person-outline" size={24} color={color} />
                ),
                drawerLabel: "Account",
            }}/>
            <Drawer.Screen name="Card" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <AntDesign name="creditcard" size={24} color={color} />
                ),
                drawerLabel: "Cards",
            }}/>
            <Drawer.Screen name="Beneficiaries" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Ionicons name="ios-people-outline" size={24} color={color} />
                ),
                drawerLabel: "Beneficiaries",
            }}/>
            <Drawer.Screen name="Transactions" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Transaction fill={color} width={24} height={24}/>
                ),
                drawerLabel: "Transactions",
            }}/>
            <Drawer.Screen name="Payments" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Feather name="dollar-sign" size={24} color={color} />
                ),
                drawerLabel: "Payments",
            }}/>
            <Drawer.Screen name="Activites" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Ionicons name="flash-sharp" size={24} color={color} />
                ),
                drawerLabel: "Activites",
            }}/>
            <Drawer.Screen name="Statistics" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Feather name="pie-chart" size={24} color={color} />
                ),
                drawerLabel: "Statistics",
            }}/>
            <Drawer.Screen name="Documents" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Ionicons name="document-outline" size={24} color={color} />
                ),
                drawerLabel: "Documents",
            }}/>
            <Drawer.Screen name="Settings" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <Ionicons name="options" size={24} color={color} />
                ),
                drawerLabel: "Settings",
            }}/>
            <Drawer.Screen name="Support" component={Home} options={{
                
                drawerIcon: ({color})=>(
                    <FontAwesome name="support" size={24} color={color} />
                ),
                drawerLabel: "Support",
            }}/>
        </Drawer.Navigator>
    </NavigationContainer>)
}

//#bac4d0