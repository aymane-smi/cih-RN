import { Dimensions, FlatList, Text, View } from "react-native";
import { StyleSheet} from "react-native"
import Card1 from "../../assets/Card 1.svg";
import Card2 from "../../assets/Card 2.svg";
import Card3 from "../../assets/Card 3.svg";


export const CreditCard = ()=>{
    const data = [
        {id: "1", component: <Card1 height={300} width={300} style={{padding: 0, marginHorizontal: -10}}/>},
        {id: "2", component: <Card2 height={300} width={300} style={{padding: 0, marginHorizontal: -10}}/>},
        {id: "3", component: <Card3 height={300} width={300} style={{padding: 0, marginHorizontal: -10}}/>}
    ];
    const renderItem = ({item})=>{
        return item.component;
    }
    return <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                centerContent
                snapToAlignment="center"
                decelerationRate="fast"
                initialScrollIndex={1}
                showsHorizontalScrollIndicator={false}
                style={{height: 300}}
            />
}