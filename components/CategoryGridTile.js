import {Pressable, Text, View} from "react-native";

function CategoryGridTile({title,color}){

    return (
        <view>
            <Pressable>
            <View style={styles.container}>
                <Text>{title}</Text>
            </View>

            </Pressable>
        </view>
    )

}

export  default CategoryGridTile;