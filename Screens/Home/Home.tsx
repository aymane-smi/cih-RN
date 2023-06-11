import { Feather, Octicons } from "@expo/vector-icons";
import { View, Image, StyleSheet } from "react-native";

export default function Home(){
    return (<View style={styles.container}>
        <View style={styles.header}>
                <Feather name="menu" size={30} color="#5f6f8d" />
                <Image source={require("../../assets/icon-cih.png")} style={{width: 50, height: 50}}/>
                <Octicons name="bell" size={25} color="#5f6f8d" />
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
    }
});