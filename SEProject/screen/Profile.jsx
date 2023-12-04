import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);

  const getUser = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    const data = JSON.parse(jsonValue);
    console.log(data);
    setUserData(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
      navigation.replace("Login");
      console.log("User item removed from AsyncStorage");
    } catch (error) {
      console.error("Error removing user item:", error);
    }
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },
      {
        text: "Continue",
        onPress: removeUser,
      },
      {
        defaultIndex: 1,
      },
    ]);
  };

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel delete account"),
        },
        {
          text: "Continue",
          onPress: () => console.log("continue delete account"),
        },
        {
          defaultIndex: 1,
        },
      ]
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/profile-bg.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userData && userData.firstName + " " + userData.lastName}
          </Text>
          <Text style={styles.name}>{userData && `NIC: ` + userData.NIC}</Text>
          <Text style={styles.name}>
            {userData && `Phone Number: ` + userData.phoneNumber}
          </Text>
          {!userLogin ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{userData && userData.email}</Text>
            </View>
          )}

          {!userLogin ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>

              <TouchableOpacity onPress={() => navigation.navigate("History")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="format-list-bulleted"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>History</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="shield-plus-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Emergency Contacts</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
