import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { BottomSection, MiddleSection, Welcome } from "../components";
// import { useNavigation } from "@react-navigation/native";

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> Moratuwa, Sri Lanka</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.notificationCount}>
              <Text style={styles.notificationNumber}>9+</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
              <Image
                source={require("../assets/profile.jpg")}
                style={styles.cover}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <MiddleSection />
        <BottomSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
