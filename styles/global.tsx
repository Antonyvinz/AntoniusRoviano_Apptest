import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "aqua",
  },
  avatar: {
    backgroundColor: "#E9E2E2",
    padding: 10,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  contactsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 18,
    backgroundColor: "white",
    padding: 10,
  },
  contactsName: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 2,
    borderRadius: 100,
    marginRight: 10,
  },
  listContainer: {
    flex: 1,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  floatingButton: {
    backgroundColor: "#2393BE",
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  inputForm: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
