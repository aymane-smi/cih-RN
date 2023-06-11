import { Feather, Octicons } from "@expo/vector-icons";
import { View, Image, StyleSheet } from "react-native";

export default function Home(){
    return (<View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%"}}>
                <Feather name="menu" size={40} color="black" />
                <Image source={require("../../assets/icon-cih.png")} style={{width: 50, height: 50}}/>
                <Octicons name="bell" size={30} color="black" />
        </View>
    </View>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    }
});