import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Animated, { withDelay, withTiming, useSharedValue, useAnimatedStyle, SharedValue } from "react-native-reanimated";
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
export default function LoadingScreen(){
    const imageValue = useSharedValue(400);
    const textValue = useSharedValue(400);
    const opacityValue = useSharedValue(0); 

    const imageAnimation = useAnimatedStyle(()=>({
        transform: [{
            translateY: imageValue.value,
        }],
        opacity: opacityValue.value,
    }));
    const textAnimation = useAnimatedStyle(()=>({
        transform: [{
            translateY: imageValue.value,
        }],
        opacity: opacityValue.value,
    }));

    useEffect(()=>{
        imageValue.value = withTiming(0, {duration: 1500});
        textValue.value = withDelay(1000, withTiming(0, {duration: 1500}));
        opacityValue.value = withTiming(1, {duration: 1500});
    },[]);
    const [fontsLoaded] = useFonts({
        "Poppins-Thin": require("../assets/Poppins/Poppins-Thin.ttf"),
    })
    return (<LinearGradient style={styles.container} colors={['#f5e5e0', '#dde7eb', '#f5e5e0']} end={{ x: 0.9, y: 0.7 }}>
        <Animated.Image style={[styles.image, imageAnimation]} source={require("../assets/logo.png")}/>
        <Animated.Text style={[styles.text, textAnimation]}>La banque de demain dès aujourd'hui</Animated.Text>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Poppins-Thin',
        textAlign: "center",
        color: "#bac4d0",
        fontSize: 18,
        lineHeight: 30,
        width: 180,

    },
    image: {
        width: 150,
        height: 100,
    },
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
});