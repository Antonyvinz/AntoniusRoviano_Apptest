const initialState = {
  contacts: [
    { id: 1, name: "John Doe", phone: "42424242" },
    { id: 2, name: "John Doe", phone: "42424242" },
    { id: 3, name: "John Doe", phone: "42424242" },
    { id: 4, name: "John Doe", phone: "42424242" },
    { id: 5, name: "John Doe", phone: "42424242" },
    { id: 6, name: "John Doe", phone: "42424242" },
  ],
};

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact: any) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact: any) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;
