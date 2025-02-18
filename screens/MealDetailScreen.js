import { useLayoutEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import FavoritesContext from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const favoriteMealsCtx = useContext(FavoritesContext);

  const meal = MEALS.find((mealItem) => {
    return mealItem.id === mealId;
  });

  function handleChangeFavoriteStatus() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  const mealIsFavorite = favoriteMealsCtx.ids.ids.includes(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={handleChangeFavoriteStatus}
          />
        );
      },
    });
  }, [navigation, handleChangeFavoriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});

export default MealDetailScreen;
