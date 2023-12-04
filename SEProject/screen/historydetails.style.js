import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    secondContainer: {  },
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
    },
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
        width: SIZES.width -30,
        height: SIZES.height / 3,
        resizeMode: "stretch",
        marginVertical: 5,
      },
      coverVideo: {
        width: SIZES.width -30,
        height: SIZES.height / 3,
        marginVertical: 5,
      },
});

export default styles