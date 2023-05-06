import { Ionicons } from "@expo/vector-icons";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { deleteContact } from "../redux/contactAction";
import { globalStyles } from "../styles/global";

function Home({ contacts, deleteContact, navigation }: any) {
  const handleDellete = (item: any) => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure want to delete contact :  " + item.name,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteContact(item.id);
          },
        },
      ]
    );
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
                navigation.navigate("ContactDetails", item);
              }}
            >
              <View style={globalStyles.contactsName}>
                <Ionicons
                  style={globalStyles.avatar}
                  name="person"
                  size={24}
                  color="black"
                />
                <Text style={globalStyles.titleText}>{item.name}</Text>
              </View>

              <TouchableOpacity
                // style={globalStyles.contactsItem}
                onPress={() => handleDellete(item)}
              >
                <Ionicons
                  style={globalStyles.removeButton}
                  name="close"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={globalStyles.floatingButtonContainer}>
        <TouchableOpacity
          style={globalStyles.floatingButton}
          onPress={() => {
            navigation.navigate("CreateContact");
          }}
        >
          <Ionicons name="add" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteContact: (contactId: any) => dispatch(deleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
