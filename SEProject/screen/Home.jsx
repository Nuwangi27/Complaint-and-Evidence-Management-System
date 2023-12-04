import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import React, {useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { BottomSection, MiddleSection, Welcome } from "../components";
// import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [user, setuser] = useState("");

  const getUser = async() => {
    const jsonValue = await AsyncStorage.getItem('user');
    const data = JSON.parse(jsonValue);
    setuser(data)
  }
  useEffect(()=>{
    getUser();
  },[])

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>{user.address}</Text>
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
