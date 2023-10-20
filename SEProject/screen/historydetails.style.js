import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow:{
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
        marginBottom: 20
    },
    upperText: {
        color: COLORS.black,
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    details:{
        marginTop: SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopRightRadius: SIZES.large,
        borderTopLeftRadius: SIZES.large,
    },
    categoryRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20
    },
    category: {
        fontFamily: "bold",
        fontSize: SIZES.large,
        width: "70%"
    },
    status: {
        paddingHorizontal: 10,
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.WHITE
    },
    statusWrapper: (status) => ({
        backgroundColor: status === "Pending" ? COLORS.tertiary : status === "Resolved" ? COLORS.green : COLORS.gray,
        borderRadius: SIZES.large
    }),
    descriptionWrapper: {
        marginTop: SIZES.large*2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large - 2
    },
    descText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        padding: 5,
        borderRadius: SIZES.large
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width,
        paddingTop: SIZES.xSmall/2
    },
    cartBtn: {
        width: SIZES.width*0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12
    },
    cartTitle: {
        marginLeft: SIZES.small,
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles