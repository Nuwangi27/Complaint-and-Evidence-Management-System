import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.xLarge,
    marginBottom: 20,
    fontFamily: "bold"
  },
  otpContainer: {
    flexDirection: "row",
  },
  otpInput: {
    width: 60,
    height: 60,
    fontSize: SIZES.xxLarge,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.small,
    textAlign: "center",
    margin: 5,
  },
  resetContainer: {
    flexDirection:"row"
  },
  resetBtn: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 10
  }
});

export default styles;
