import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { History, Home, Profile } from "../screen";
import * as LocalAuthentication from "expo-local-authentication";

const TAB = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyles: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigation = (props) => {
  const authenticateWithBiometrics = async () => {
    try {
      const isAvailable = await LocalAuthentication.hasHardwareAsync();
      if (isAvailable) {
        const isEnrolledFaceID = await LocalAuthentication.isEnrolledAsync();
        if (isEnrolledFaceID) {
          const resultFaceID = await LocalAuthentication.authenticateAsync({
            promptMessage: "Authenticate with Face ID or Password",
          });

          if (resultFaceID.success) {
            // Authentication with Face ID was successful
            console.log("Face ID authentication successful");
            props.navigation.navigate("Bottom Navigation");
            return;
          }else{
            props.navigation.navigate("Login");
          }
        }else{
          props.navigation.navigate("Login");
        }

        // If Face ID authentication failed or is not available, try Fingerprint
        const isEnrolledFingerprint = await LocalAuthentication.isEnrolledAsync(
          {
            promptMessage: "Authenticate with Fingerprint",
          }
        );
        if (isEnrolledFingerprint) {
          const resultFingerprint = await LocalAuthentication.authenticateAsync(
            {
              promptMessage: "Authenticate with Fingerprint",
            }
          );

          if (resultFingerprint.success) {
            // Authentication with Fingerprint was successful
            console.log("Fingerprint authentication successful");
            props.navigation.navigate("Bottom Navigation");
            return;
          }
        }else{
          props.navigation.navigate("Login");
        }

        // If both Face ID and Fingerprint are unavailable or authentication fails, handle as needed
        console.log("Biometric authentication failed or not available");
      } else {
        // Biometric hardware not available, handle this case as needed
        console.log("Biometric hardware not available");
        props.navigation.navigate("Login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    authenticateWithBiometrics();
  }, []);
  return (
    <TAB.Navigator screenOptions={screenOptions}>
      <TAB.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <TAB.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "list" : "list-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <TAB.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </TAB.Navigator>
  );
};

export default BottomTabNavigation;
