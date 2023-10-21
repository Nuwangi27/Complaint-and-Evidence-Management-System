import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.WHITE },
  secondContainer: { flex: 1, marginHorizontal: 20 },
  headerText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginVertical: 10,
    color: COLORS.black,
  },
  inputConatiner: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.offwhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingLeft: 15,
    alignItems: "center",
  },
  btn: {
    height: "100%",
    width: "30%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 11,
    borderBottomEndRadius: 11,
  },
  btnText: {
    color: COLORS.WHITE,
    fontFamily: "bold"
  },
  highlightedText: {
    fontWeight: "bold",
    color: COLORS.primary,
    fontSize: SIZES.large,
  },
  normalText: {
    color: COLORS.gray,
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
  separatorText: {
    color: COLORS.primary,
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  separator: {
    borderBottomWidth: 0.2,
    flexDirection: "row",
    paddingVertical: 15,
    borderColor: COLORS.gray,
  },
});

export default styles;
