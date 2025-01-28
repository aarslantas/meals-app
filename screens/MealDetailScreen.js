import { Image, View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const meal = MEALS.find((mealItem) => {
    return mealItem.id === mealId;
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
      <Text>Ingredients</Text>
      {meal.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {meal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealDetailScreen;
