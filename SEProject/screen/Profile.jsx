import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },
      {
        text: "Continue",
        onPress: () => console.log("continue pressed"),
      },
      {
        defaultIndex: 1,
      },
    ]);
  };

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on your device",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel clear cache"),
        },
        {
          text: "Continue",
          onPress: () => console.log("continue clear cache"),
        },
        {
          defaultIndex: 1,
        },
      ]
    );
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
            {userLogin ? "Yesh Adithya" : "Please login into your account"}
          </Text>
          {!userLogin ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>yesh.adithya31@gmail.com </Text>
            </View>
          )}

          {!userLogin ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Favourites")}
              >
                <View style={styles.menuItem(0.2)}>
                  <View style={{ alignItems: "flex-end" }}>
                    <View style={styles.notificationCount}>
                      <Text style={styles.notificationNumber}>9</Text>
                    </View>
                    <MaterialCommunityIcons
                      name="bell-outline"
                      color={COLORS.primary}
                      size={24}
                    />
                  </View>
                  <Text style={styles.menuText}>Notification and Alert</Text>
                </View>
              </TouchableOpacity>

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

              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Clear cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Delete Account</Text>
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
