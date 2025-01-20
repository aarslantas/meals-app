import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function handlePress() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={handlePress}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
