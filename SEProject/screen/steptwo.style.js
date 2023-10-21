import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.WHITE, marginTop: 20 },
  secondContainer: { flex: 1, marginHorizontal: 20 },
  sectionHeaderText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    flex: 1,
    marginTop: 10,
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
  multiinputConatiner: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.offwhite,
    borderWidth: 1,
    height: 100,
    borderRadius: 12,
    flexDirection: "row",
    paddingLeft: 15,
    alignItems: "center",
    paddingTop: 10,
  },
  label: {
    color: COLORS.black,
    fontFamily: SIZES.medium,
    marginVertical: 10,
    fontFamily: "semibold",
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
  btnPrevious: {
    height: 50,
    width: "30%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 20,
  },
  btnText: {
    color: COLORS.WHITE,
    fontFamily: "bold",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: SIZES.large,
    zIndex: 999,
    marginBottom: 60,
  },
  mapContainer: {
    borderWidth: 1,
    height: 200,
    borderColor: COLORS.primary,
    marginBottom: SIZES.large,
    borderRadius: 12,
  },
  mapView: { width: "100%", height: "100%", borderRadius: 12 },
  dropdownContainer: {
    marginVertical: 10,
  },
  headerText: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontFamily: "bold",
  },
  subHeaderText: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontFamily: "light",
  },
  previewHeader: {
    color: COLORS.black,
    fontSize: SIZES.large,
    fontFamily: "semibold",
    marginVertical: 15,
  },
  previewTitle: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontFamily: "light",
  },
  previewSubTitle: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontFamily: "semibold",
    marginBottom: 5,
  },
  coverImg: {
    width: SIZES.width,
    height: SIZES.height / 3,
    resizeMode: "stretch",
    marginVertical: 5,
  },
  coverVideo: {
    width: SIZES.width,
    height: SIZES.height / 3,
    marginVertical: 5,
  },
});

export default styles;
