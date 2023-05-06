import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import { useEffect, useState } from "react";
import { editContact } from "../redux/contactAction";
import { connect } from "react-redux";

const mapStateToProps = (state: any, ownProps: any) => {
  const { contactId } = ownProps.route.params.id;
  return {
    contact: state.contacts.find((contact: any) => contact.id === contactId),
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    editContact: (contact: any) => dispatch(editContact(contact)),
  };
};

function ContactDetails({ contact, editContact, route, navigation }: any) {
  const [name, setName] = useState(route.params.name);
  const [phone, setPhone] = useState(route.params.phone);

  const submitHandler = () => {
    const payload = {
      ...contact,
      id: route.params.id,
      name,
      phone,
    };
    editContact(payload);
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
      <Button color="#2393BE" onPress={() => submitHandler()} title="Save" />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
