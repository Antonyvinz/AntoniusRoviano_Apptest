import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [contacts, setContacts] = useState([] as any);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setContacts([
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
      { name: "John Doe", phone: 442424242 },
    ]);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.listContainer}>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={globalStyles.contactsItem}
              onPress={() => {
                //   navigation.navigate("ReviewDetails", item)
              }}
            >
              <Ionicons
                style={globalStyles.avatar}
                name="person"
                size={24}
                color="black"
              />
              <Text style={globalStyles.titleText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={globalStyles.floatingButtonContainer}>
        <TouchableOpacity style={globalStyles.floatingButton}>
          <Ionicons name="add" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
