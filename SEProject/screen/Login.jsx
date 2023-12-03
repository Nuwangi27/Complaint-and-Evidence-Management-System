import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import styles from "./login.style";
import { BackBtn, SubmitButton } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";  
import axios  from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("password is Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Email is Required"),
});

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  const handleSubmit = async (values) => {
    if(values.email && values.password){
      try {
        const response = await axios.post('https://backend-se-api.onrender.com/api/complainers/login', values);
        console.log(response.data);
      } catch (error) {
        Alert.alert("Oops", "Error: "+ error);
      }
    }
  }

  const isValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
      {
        defaultIndex: 1,
      },
    ]);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1, elevation: 4 }} // Adjust the elevation as needed
        behavior="position" // This determines how the view behaves when the keyboard is displayed
        enabled
      >
        <View>
          {/* <BackBtn onPress={() => navigation.goBack()} /> */}
          <Image
            source={require("../assets/crime_app_banner.png")}
            style={styles.coverImg}
          />
          <Text style={styles.title}>Login</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Enter email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="Enter password"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <SubmitButton
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : () =>isValidForm()}
                  isValid={isValid}
                />
                <Text
                  style={styles.registrationBtn}
                  onPress={() => navigation.navigate("Signup")}
                >
                  Register
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
