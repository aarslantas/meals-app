import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import FavoritesContext from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMealIds);

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealIds.includes(meal.id);
  });

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesScreen;
