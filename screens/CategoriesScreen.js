import {CATEGORIES} from "../data/dummy-data";
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";







function CategoriesScreen({navigation}) {
    function renderCategoryItem ({itemData}){

        function handlePress (){
            navigation.navigate('MealsOveriview');
        }

        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    }


    return <FlatList data={CATEGORIES} keyExtractor={(item) => {item.id}} renderItem={renderCategoryItem.bind()}  numColumns={2}/>
}



export default CategoriesScreen;