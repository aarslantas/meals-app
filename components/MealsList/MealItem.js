import {
  Pressable,
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import MealDetails from "../MealDetails";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function handleSelectMeal() {
    navigation.navigate("MealDetail", { mealId: id });
  }

  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(pressed) => (pressed ? styles.pressed : null)}
        onPress={handleSelectMeal}
      >
        <View>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: { opacity: 0.5 },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});

export default MealItem;
