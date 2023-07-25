import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";
import { History } from "./Histrory";
import { FlatList } from "react-native-gesture-handler";
import data from "../../dev-data/history.json";
export const Activites  = ()=>{
    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
        "Poppins-Light": require("../../assets/Poppins/Poppins-Light.ttf"),
        "Poppins-Regular": require("../../assets/Poppins/Poppins-Regular.ttf"),
    });
    if(!fontsLoaded)
        return null;
    else
        return (
        <View>
            {/* Activites Header */}
            <View style={styles.header}>
                <Text style={{fontFamily: "Poppins-Bold", color: "#5f6f8d"}}>Recent Activites</Text>
                <View style={styles.menu}>
                    <Text style={{fontFamily: "Poppins-Light", color: "#5f6f8d"}}>Last Month</Text>
                    <Entypo name="chevron-small-down" size={24} color="#5f6f8d" />
                </View>
            </View>
            <FlatList
                style={{
                    height: 200
                }}
                data={data}
                renderItem={(item)=><History info={item}/>} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        marginTop: 15
    },
    menu:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    }
});