import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, top, size) => ({
    fontFamily: "bold",
    fontSize: size - 12,
    marginTop: top,
    color: color,
    marginHorizontal: SIZES.medium,
  }),
  reportContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.medium,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  reportWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  reportInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  reportBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  reportText: {
    fontFamily: "semibold",
    top: 15,
    right: 0,
    color: COLORS.gray,
  },
  coverImg: {
    height: SIZES.height / 3,
    width: "100%",
    resizeMode: "contain",
  },
  iconStyle: {
    marginRight: 10
  },
});

export default styles;
