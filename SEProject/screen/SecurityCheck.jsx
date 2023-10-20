import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

const SecurityCheck = (props) => {
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
          }
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
        }

        // If both Face ID and Fingerprint are unavailable or authentication fails, handle as needed
        console.log("Biometric authentication failed or not available");
      } else {
        // Biometric hardware not available, handle this case as needed
        console.log("Biometric hardware not available");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    authenticateWithBiometrics();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Authenticating with biometrics...</Text>
    </View>
  );
};

export default SecurityCheck;
