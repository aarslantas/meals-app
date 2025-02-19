import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";

import { store } from "./store/redux/store";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Meals" component={CategoriesScreen} />
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#351401",
                },
                headerTintColor: "white",
                contentStyle: {
                  backgroundColor: "#3f2f25",
                },
              }}
            >
              <Stack.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                  title: "Meals Categories",
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />
              <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
