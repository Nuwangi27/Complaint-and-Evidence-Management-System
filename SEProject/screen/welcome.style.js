import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    coverImg: {
        height: SIZES.height / 2.4,
        width: SIZES.width -10,
        marginVertical: 20,
        resizeMode: "contain",
        alignContent: "center"
    },
    textContainer: {
        paddingHorizontal: 22,
        marginTop: 10,
        width: "100%",
      },
      textStyle: {
        fontSize: 50,
        fontFamily: "bold",
        color: COLORS.WHITE,
      },
      subTextContainer: { marginVertical: 22 },
      subTextStyle: {
        fontSize: 16,
        fontFamily: "bold",
        color: COLORS.WHITE,
        marginVertical: 4,
      },
      joinNowBtn: {
        marginTop: 2,
        width: "100%",
        marginTop: 20
      }
});

export default styles;
