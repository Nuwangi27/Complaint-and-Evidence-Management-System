import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    bottom: 0,
  },
  bottomRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  upperText: {
    color: COLORS.black,
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
    flexDirection: "row",
    textAlign: "center",
    marginBottom: 10,
  },
  submissionContainer: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
  },
  submitContainer: {
    flex: 1,
    justifyContent: "flex-end",
    height: SIZES.height / 2,
  },
  sectionHeaderText: {
    color: COLORS.primary,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },
  subHeaderText: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontFamily: "light",
    marginTop: 10,
  },
  btnSubmit: {
    height: 50,
    width: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },
  btnText: {
    color: COLORS.WHITE,
    fontFamily: "bold",
  },
});

export default styles;
