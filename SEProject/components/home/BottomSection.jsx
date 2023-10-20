import { View, Text } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomSection = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.welcomeText(
            COLORS.black,
            SIZES.xSmall,
            SIZES.large * 1.7
          )}
          onPress={() => navigation.navigate("History")}
        >
          <MaterialCommunityIcons
            name="alarm-light"
            size={28}
            color={COLORS.gray}
            style={styles.iconStyle}
          />
          Safety Tips and Guidlines
        </Text>
      </View>
    </View>
  );
};

export default BottomSection;
