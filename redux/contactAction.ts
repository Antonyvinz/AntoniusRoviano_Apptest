export const addContact = (contact: any) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const editContact = (contact: any) => {
  return {
    type: "EDIT_CONTACT",
    payload: contact,
  };
};

export const deleteContact = (contactId: any) => {
  return {
    type: "DELETE_CONTACT",
    payload: contactId,
  };
};
