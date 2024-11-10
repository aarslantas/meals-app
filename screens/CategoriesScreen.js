import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ itemData }) {
    function handlePress() {
      navigation.navigate("MealsOveriview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }

  return (
    // <FlatList
    //   data={CATEGORIES}
    //   keyExtractor={(item) => {
    //     item.id;
    //   }}
    //   renderItem={renderCategoryItem}
    //   numColumns={2}
    // />

    <View>
      <Text>Asdasd</Text>
    </View>
  );
}

export default CategoriesScreen;
