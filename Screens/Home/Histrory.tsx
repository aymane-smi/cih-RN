import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { useFonts } from "expo-font";

export const History = ({info}: any)=>{
    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
        "Poppins-Light": require("../../assets/Poppins/Poppins-Light.ttf"),
        "Poppins-semi": require("../../assets/Poppins/Poppins-SemiBold.ttf"),
    });
    if(!fontsLoaded)
        return null;
    else
        return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.status}>
                    <Entypo name={info.item.status === "down" ? "chevron-small-down" : "chevron-small-up" } size={50} color={info.item.status === "down" ? "#FC8989" : "#54F150" } />
                </View>
                <View style={{gap: 10}}>
                    <Text style={[{fontFamily: "Poppins-semi", fontSize: 13}]}>{info.item.title}</Text>
                    <Text style={[{fontFamily: "Poppins-Light", fontSize: 13, color: "#5f6f8d"}]}>20/07/2023</Text>
                </View>
            </View>
            <View style={{gap: 10}}>
                <Text style={[{fontFamily: "Poppins-semi", fontSize: 13}]}>{info.item.status === "down" && "-"}{info.item.price}</Text>
                <Text style={[{fontFamily: "Poppins-Light", fontSize: 13, color: "#5f6f8d"}]}>MAD</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        justifyContent: "space-between",
        flexDirection:"row"
    },
    status:{
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems:"center"
    },
    left:{
        flexDirection: "row",
        gap: 10
    }
});