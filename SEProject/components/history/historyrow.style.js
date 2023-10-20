import { StyleSheet } from "react-native";
import { COLORS, SHADOW, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOW.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  complaintImg: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  complaintTitle: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    color: COLORS.primary,
  },
  complaintSubTitle: {
    fontSize: SIZES.small + 2,
    fontFamily: "semibold",
    color: COLORS.gray,
    marginTop: 3,
  },
  statusContainer: (status) => ({
    marginTop: 1,
    padding: 1,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: status === "Pending" ? COLORS.tertiary : status === "Resolved" ? COLORS.green : COLORS.gray,
    width: SIZES.width / 7,
  }),
  statusStyle: {
    color: COLORS.WHITE, // Text color
    fontFamily: "bold",
    fontSize: SIZES.small,
  },
});

export default styles;
