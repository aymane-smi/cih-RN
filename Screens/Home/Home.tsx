import { Feather, Fontisto, Foundation, Ionicons, Octicons } from "@expo/vector-icons";
import { View, Image, StyleSheet, Text } from "react-native";
import { CreditCard } from "./CreditCard";

export default function Home(){
    return (<View style={styles.container}>
        <View style={styles.header}>
                <Feather name="menu" size={30} color="#5f6f8d" />
                <Image source={require("../../assets/icon-cih.png")} style={{width: 50, height: 50}}/>
                <Octicons name="bell" size={25} color="#5f6f8d" />
        </View>
        <CreditCard />
        <View style={styles.optionContainer}>
            <View style={styles.option}>
                <Fontisto name="wallet" size={24} color="#bac4d0" />
            </View>
            <View style={styles.option}>
                <Foundation name="graph-pie" size={24} color="#bac4d0" />
            </View>
            <View style={styles.option}>
                <Ionicons name="md-newspaper-outline" size={24} color="#bac4d0"/>
            </View>
        </View>
    </View>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    header:{ 
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center",
         width: "100%"
    },
    option:{
        padding: 30,
        borderRadius: 20,
        backgroundColor: "white",
        width: 24,
        height: 24,
    },
    optionContainer:{
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    }
});