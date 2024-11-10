import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  // MEALS

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryId === catId;
  });

  function renderMealItem(itemData) {
    <MealItem title={itemData.item.title} />;
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
