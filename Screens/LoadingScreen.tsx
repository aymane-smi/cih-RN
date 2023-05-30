import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Animated, { withDelay, withTiming, useSharedValue, useAnimatedStyle, SharedValue } from "react-native-reanimated";
import { useEffect } from "react";
export default function LoadingScreen(){
    const imageValue = useSharedValue(300);
    const textValue = useSharedValue(300);

    const imageAnimation = useAnimatedStyle(()=>({
        transform: [{
            translateY: imageValue,
        }],
    }));
    const textAnimation = useAnimatedStyle(()=>({
        transform: [{
            translateY: imageValue,
        }],
    }));

    useEffect(()=>{
        imageValue.value = withTiming(0, {duration: 1000});
        textAnimation.value = withDelay(1000, withTiming(0, {duration: 1000}));
    },[]);
    const [fontsLoaded] = useFonts({
        "Poppins-Thin": require("../assets/Poppins/Poppins-Thin.ttf"),
    })
    return (<View style={styles.container}>
        <Animated.Image style={[styles.image, imageAnimation]} source={require("../assets/logo.png")}/>
        <Animated.Text style={[styles.text, textAnimation]}>La banque de demain dès aujourd'hui</Animated.Text>
    </View>)
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