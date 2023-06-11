import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import {Entypo} from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";

export default function Login({login, layout}){
    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
        "Poppins-Light": require("../assets/Poppins/Poppins-Light.ttf"),
        "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    });
    const [first, setFirst] = useState<boolean>(false);
    const [second, setSecond] = useState<boolean>(false);

    const handleBiometric = async()=>{
        const {success} = await LocalAuthentication.authenticateAsync({
            promptMessage: "use your fingerprint to connect to your account!",
            disableDeviceFallback: true,
            cancelLabel: "cancel",
        });
        if(success)
            login(true);
    }
    return (
        <LinearGradient style={styles.container} colors={['#f5e5e0', '#dde7eb', '#f5e5e0']} end={{ x: 0.9, y: 0.7 }} onLayout={layout}>
            <StatusBar/>
            <Image style={[styles.icon]} source={require("../assets/icon-cih.png")}/>
            <Text style={styles.sign}>Sign In</Text>
            <Text style={styles.welcome}>Welcome, we missed you!</Text>
            {/* form */}
            <View style={{ marginTop: 20 }}>
                <Text style={styles.label}>Your Email</Text>
                <TextInput placeholder="Enter your email" style={first ? styles.input : styles.focusInput} onFocus={()=>setFirst(true)} onBlur={()=>setFirst(false)}/>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.label}>Your Password</Text>
                <TextInput placeholder="Enter your Password" style={second ? styles.input : styles.focusInput} onFocus={()=>setSecond(true)} onBlur={()=>setSecond(false)}/>
            </View>
            <View style={styles.helper}>
                <View style={{ flexDirection: "row", gap: 5, justifyContent: "center",alignItems: "center" }}>
                    <Checkbox style={styles.checkbox}/>
                    <Text style={{ fontFamily: 'Poppins-Regular' }}>Remember me</Text>
                </View>
                <Text style={{ color: "#eca184", fontFamily: 'Poppins-Regular' }}>Forgot Pasword?</Text>
            </View>
            {/* button */}
            <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
                <TouchableOpacity style={styles.signButton}>
                    <Text style={{ color: "white", }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fingerPrint} onPress={handleBiometric}>
                    <Entypo name="fingerprint" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 15, marginTop: 10 }}>
                <View style={{borderWidth: 0.5, flexGrow: 1, borderColor: "#bac4d0"}} />
                <Text style={{ color: "#bac4d0" }}>or</Text>
                <View style={{borderWidth: 0.5, flexGrow: 1, borderColor: "#bac4d0"}} />
            </View>
            <TouchableOpacity style={{ marginTop: 10, justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 10, borderColor:"#00aeee", borderWidth: 1 }}>
                <Text style={{ color: "#00aeee" }}>Create an account</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "flex-start",
        paddingHorizontal: 35,
        paddingVertical: 50,
        gap: 10
    },
    helper:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop: 15
    },
    signButton:{
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#00aeee",
        borderRadius: 10,
        elevation: 5,
        flexGrow:1,
    },
    fingerPrint:{
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#00aeee",
        borderRadius: 10,
        elevation: 5,
        width: 60,
    },
    checkbox:{
        width: 16,
        height: 16,
        borderWidth: 0.8
    },
    sign:{
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        color: "#667592",
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
    welcome:{
        fontFamily: "Poppins-Light",
        color: "#bac4d0"
    },
    icon:{
        width: 70,
        height: 70,
        marginLeft: -20,
    }
});