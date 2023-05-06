import { useState } from "react";
import { addContact } from "../redux/contactAction";
import { View, TextInput, Button, Text } from "react-native";
import { connect } from "react-redux";
import { globalStyles } from "../styles/global";

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addContact: (contact: any) => dispatch(addContact(contact)),
  };
};
function CreateContact({ contacts, addContact, navigation }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = () => {
    const payload = {
      id: contacts.length + 2,
      name: name,
      phone: phone,
    };
    addContact(payload);
    console.log(payload);
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Name</Text>
      <TextInput
        style={globalStyles.inputForm}
        placeholder="eg. John Doe..."
        onChangeText={(val: any) => setName(val)}
        value={name}
      />
      <Text style={globalStyles.titleText}>Phone</Text>
      <TextInput
        style={globalStyles.inputForm}
        placeholder="eg. 081xxxx"
        onChangeText={(val: any) => {
          setPhone(val);
        }}
        value={phone}
      />
      <Button color="#2393BE" onPress={() => submitHandler()} title="Create New" />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact);
