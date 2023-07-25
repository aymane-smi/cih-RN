import { Dimensions, FlatList, Text, View } from "react-native";
import { StyleSheet} from "react-native"
import Card1 from "../../assets/Card 1.svg";
import Card2 from "../../assets/Card 2.svg";
import Card3 from "../../assets/Card 3.svg";


export const CreditCard = ()=>{
    const data = [
        {id: "1", component: <Card1 height={350} width={350} style={{marginHorizontal: -10}}/>},
        {id: "2", component: <Card2 height={350} width={350} style={{marginHorizontal: -10}}/>},
        {id: "3", component: <Card3 height={350} width={350} style={{marginHorizontal: -10}}/>}
    ];
    const renderItem = ({item}: any)=>{
        return item.component;
    }
    return <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                initialScrollIndex={1}
                showsHorizontalScrollIndicator={false}
                style={{
                    flexGrow: 0,
                    // borderColor: "black",
                    // borderWidth: 5,
                    padding: 0,
                    marginVertical: -50
                }}
            />
}