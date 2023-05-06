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
    alignContent: "center",
    marginBottom: 20,
    borderRadius: 18,
    backgroundColor: "white",
    padding: 10,
  },
  listContainer: {
    flex: 1,
    // backgroundColor: "green",
    // marginTop: 10,
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
});
