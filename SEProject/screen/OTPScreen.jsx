import React, { useState, useRef } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import styles from "./otpscreen.style";
import { COLORS, SIZES } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios  from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTPScreen = (props) => {
  const [otp, setOtp] = useState(["", "", "", ""]); // An array to store each digit of the OTP

  // Create an array of refs for each input
  const otpInputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Function to handle changes in OTP input
  const handleOtpChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (index < 3 && value !== "") {
        // Move focus to the next input field
        otpInputs[index + 1].current.focus();
      }
    }
  };
  // Function to resend OTP
  const handleResendOTP = async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    const data = JSON.parse(jsonValue);
    const token = data.token; // Replace with your actual bearer token
    console.log(data);
    console.log(token);
    // Implement the logic to resend the OTP here
    var otpVal = parseInt(otp.join(''), 10);

    try {
      const response = await axios.post('https://backend-se-api.onrender.com/api/complainers/otp', {
        "otp": otpVal // Pass the otpVal in the request body
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    
      console.log('Response:', response.data);
      props.navigation.replace("Bottom Navigation");
      // Process the response data here
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert("Oops", "Error: "+ error);
      // Handle errors here
    }
  };

  const handleIconClick = () => {
    // Handle the click action here
    setOtp(["", "", "", ""]);
    otpInputs[0].current.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
            maxLength={1}
            keyboardType="numeric"
            ref={otpInputs[index]} // Use the ref for each input
          />
        ))}
      </View>
      <View style={styles.resetContainer}>
        <View style={styles.resetBtn}>
          <Button
            title="Proceed"
            onPress={handleResendOTP}
            color={COLORS.WHITE}
          />
        </View>
        <TouchableOpacity onPress={handleIconClick}>
          <View style={{ marginLeft: 15 }}>
            <MaterialCommunityIcons name="eraser" size={SIZES.xxLarge} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;
