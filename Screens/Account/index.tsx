import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Account({navigation}: any){
    const [first, setFirst] = useState<boolean>(false);
    const [second, setSecond] = useState<boolean>(false);

    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
        "Poppins-Light": require("../../assets/Poppins/Poppins-Light.ttf"),
        "Poppins-semi": require("../../assets/Poppins/Poppins-SemiBold.ttf"),
    });
    if(!fontsLoaded)
        return null;
    else
        return (<View style={styles.accountContainer}>
            <View style={styles.titleContainer}>
                <Entypo name="chevron-small-left" size={45} color="#5f6f8d" onPress={()=>navigation.navigate("Home")}/>
                <Text style={styles.title}>Account</Text>
                <View />
            </View>
            <View style={{
                justifyContent:"center",
                alignItems: "center",
            }}>
                <View style={styles.imageContainer}>
                    <Ionicons name="person" size={80} color="#0190EE" />
                </View>
            </View>
            {/* form */}
            <View style={styles.form}>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput placeholder="Enter your email" style={first ? styles.input : styles.focusInput} onFocus={()=>setFirst(true)} onBlur={()=>setFirst(false)}/>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder="Enter your Password" style={second ? styles.input : styles.focusInput} onFocus={()=>setSecond(true)} onBlur={()=>setSecond(false)}/>
                </View>
                <TouchableOpacity style={{ marginTop: 30, justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 10,  backgroundColor: "#00aeee"}}>
                    <Text style={{ color: "white", fontFamily: "Poppins-semi" }}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    accountContainer:{
        padding: 10,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        paddingTop: 10
    },
    title:{
        fontFamily: "Poppins-semi",
        fontSize: 24,
        color: "#5f6f8d"
    },
    imageContainer:{
        borderRadius: 80,
        width: 140,
        height: 140,
        padding: 30,
        backgroundColor: "#F6F9F9",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    input:{
        width: Dimensions.get("screen").width - 75,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        paddingBottom: 8,
    },
    label:{
        fontFamily: 'Poppins-Regular',
        color: "#bac4d0"
    },
    focusInput:{
        width: Dimensions.get("screen").width - 75,
        borderBottomWidth: 0.5,
        borderBottomColor: "#667592",
        paddingBottom: 8,
    },
    form:{
        padding: 30,
        marginTop: 40
    }

});