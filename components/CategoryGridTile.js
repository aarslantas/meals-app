import {Pressable, Text, View,} from "react-native";

function CategoryGridTile({title,color}){

    return (
        <view style={styles.gridItem}>
            <Pressable android_ripple={{color:"#ccc"}} style={styles.button}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>

            </Pressable>
        </view>
    )

}

export  default CategoryGridTile;



const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:"white",
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        overflow:"hidden"
    },

    button:{
        flex:1,
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
    }
})