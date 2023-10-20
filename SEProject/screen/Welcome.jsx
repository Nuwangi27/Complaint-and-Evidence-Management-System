import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import styles from "./welcome.style";
import { COLORS } from "../constants";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.primary, COLORS.primary]}
    >
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../assets/image1.png")}
            style={styles.coverImg}
          />
        </View>

        {/* content  */}

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Let's Get</Text>
          <Text style={styles.textStyle}>Started</Text>

          <View style={styles.subTextContainer}>
            <Text style={styles.subTextStyle}>
              Seamless Complaints And Evidence Handling, Anytime, Anywhere
            </Text>
          </View>

          <Button
            title="J o i n   N o w"
            onPress={() => navigation.navigate("Login")}
            style={styles.joinNowBtn}
            textColor={COLORS.WHITE}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
