import { Feather, Fontisto, Foundation, Ionicons, Octicons } from "@expo/vector-icons";
import { View, Image, StyleSheet, Text } from "react-native";
import { CreditCard } from "./CreditCard";
import { LinearGradient } from "expo-linear-gradient";
import { Activites } from "./Activities";

export default function Home(){
    return (<LinearGradient style={styles.container} colors={['#f5e5e0', '#dde7eb', '#f5e5e0']} end={{ x: 0.9, y: 0.7 }}>
        <View style={styles.header}>
                <Feather name="menu" size={30} color="#5f6f8d" />
                <Image source={require("../../assets/icon-cih.png")} style={{width: 50, height: 50}}/>
                <Octicons name="bell" size={25} color="#5f6f8d" />
        </View>
        <CreditCard />
        {/* OPTIONS */}
        <View style={styles.optionContainer}>
            {/* btn 1 */}
            <View style={{
                width: 70
            }}>
                <View style={styles.option}>
                    <Fontisto name="wallet" size={30} color="#5f6f8d"/>
                </View>
                <Text style={{
                    textAlign: "center",
                    color:"#5f6f8d",
                    marginTop: 5
                }}>Send Money</Text>
            </View>
            {/* btn 2 */}
            <View style={{
                width: 70
            }}>
                <View style={styles.option}>
                    <Foundation name="graph-pie" size={30} color="#5f6f8d"/>
                </View>
                <Text style={{
                    textAlign: "center",
                    color:"#5f6f8d",
                    marginTop: 5
                }}>Account Statistic</Text>
            </View>
            {/* btn 3 */}
            <View style={{
                width: 70
            }}>
                <View style={styles.option}>
                    <Ionicons name="md-newspaper-outline" size={30} color="#5f6f8d"/>
                </View>
                <Text style={{
                    textAlign: "center",
                    color:"#5f6f8d",
                    marginTop: 5
                }}>Pay</Text>
                <Text style={{
                    textAlign: "center",
                    color:"#5f6f8d",
                }}>Bills</Text>
            </View>
        </View>
        {/* ACTIVITES */}
        <Activites />
        </LinearGradient>);
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
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "white",
        width: 70,
        height: 70,
    },
    optionContainer:{
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    }
});