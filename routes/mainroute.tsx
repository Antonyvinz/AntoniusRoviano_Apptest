import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ContactDetails from "../screens/contactdetails";
import CreateContact from "../screens/createContat";
import React from "react";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2393BE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Contacts",
          }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={({ route }: any) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="CreateContact"
          component={CreateContact}
          options={{
            title: "Create New Contact",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
