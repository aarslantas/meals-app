import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  // MEALS

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = MEALS.find((category) => {
      return category.id === catId;
    });
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  function renderMealItem(itemData) {
    console.log("itemData", itemData);
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
