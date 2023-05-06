import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();
export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={Home}
          options={{
            title: "Contacts",
            headerStyle: {
              backgroundColor: "#2393BE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        {/* <Stack.Screen name="ReviewDetails" component={ReviewDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
