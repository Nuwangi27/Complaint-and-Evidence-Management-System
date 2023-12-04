import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall, SIZES.xLarge*1.7)}>
          Take Action and be part of keeping you and
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0, SIZES.xxLarge)}>
          Your community Safer
        </Text>
      </View>

      <View style={styles.reportContainer}>
        <View style={styles.reportWrapper}>
          <View
            style={styles.reportInput}
          >
            <Text style={styles.reportText}>Report an Incident</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.reportBtn} onPressIn={() => navigation.navigate("Complaint")}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

export default Welcome;
