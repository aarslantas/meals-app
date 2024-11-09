import {MEALS} from "../data/dummy-data";
import {Text, View, StyleSheet} from "react-native";

function MealsOverviewScreen({route}) {

  const catId =  route.params.categoryId
    // MEALS


    return (
        <View style={styles.container}>
            <Text>
                Measl Overivie Screen - {catId}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create((
    {
        container: {
            flex:1,
            padding:16,
        }
    }
))



export default MealsOverviewScreen;