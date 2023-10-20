import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";

const MiddleSection = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.primary, 15, SIZES.xLarge * 1.4)}>
          How to contribute in making my city safer?
        </Text>
        <Image
          style={styles.coverImg}
          source={require("../../assets/crime_img.png")}
        />
      </View>
    </View>
  );
};

export default MiddleSection;
