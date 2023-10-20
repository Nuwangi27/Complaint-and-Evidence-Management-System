import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./login.style";
import { BackBtn, SubmitButton } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import User from "../model/User";
import { Platform } from "react-native";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is Required"),
  lastname: Yup.string().required("Last name is Required"),
  NIC: Yup.string()
    .matches(
      /^[0-9]{9}$/,
      "National ID must be 9 digits long and contain only numbers"
    )
    .required("National ID is required"),
  address: Yup.string().required("Address is Required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number format")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  const newUser = new User("", "", "", "", "", "", "", "");

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
    <KeyboardAvoidingView
      style={{ flex: 1 }} // Adjust the elevation as needed
      behavior={Platform.OS == "ios" ? "padding" : "height"} // This determines how the view behaves when the keyboard is displayed
      enabled
    >
      <ScrollView>
        <SafeAreaView style={styles.safeAreaContainer}>
          <View>
            <BackBtn onPress={() => navigation.goBack()} />
            <Image
              source={require("../assets/crime_app_banner.png")}
              style={styles.coverImg}
            />
            <Text style={styles.title}>Create an account</Text>
            <Formik
              initialValues={newUser}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
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
                  {/* First name */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>First Name</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.firstname ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="account-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter First name"
                        onFocus={() => {
                          setFieldTouched("firstname");
                        }}
                        onBlur={() => {
                          setFieldTouched("firstname", "");
                        }}
                        value={values.firstname}
                        onChangeText={handleChange("firstname")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.firstname && errors.firstname && (
                      <Text style={styles.errorMessage}>
                        {errors.firstname}
                      </Text>
                    )}
                  </View>
                  {/* Last name */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Last Name</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.lastname ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="account-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter Last name"
                        onFocus={() => {
                          setFieldTouched("lastname");
                        }}
                        onBlur={() => {
                          setFieldTouched("lastname", "");
                        }}
                        value={values.lastname}
                        onChangeText={handleChange("lastname")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.lastname && errors.lastname && (
                      <Text style={styles.errorMessage}>{errors.lastname}</Text>
                    )}
                  </View>
                  {/* NIC */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>NIC</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.NIC ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="account-box-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter NIC"
                        onFocus={() => {
                          setFieldTouched("NIC");
                        }}
                        onBlur={() => {
                          setFieldTouched("NIC", "");
                        }}
                        value={values.NIC}
                        onChangeText={handleChange("NIC")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.NIC && errors.NIC && (
                      <Text style={styles.errorMessage}>{errors.NIC}</Text>
                    )}
                  </View>
                  {/* Address */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Address</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.address ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="google-maps"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter Address"
                        onFocus={() => {
                          setFieldTouched("address");
                        }}
                        onBlur={() => {
                          setFieldTouched("address", "");
                        }}
                        value={values.address}
                        onChangeText={handleChange("address")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.address && errors.address && (
                      <Text style={styles.errorMessage}>{errors.address}</Text>
                    )}
                  </View>
                  {/* Phone Number */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Phone Number</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.phoneNumber ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="cellphone"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter Phone Number"
                        onFocus={() => {
                          setFieldTouched("phoneNumber");
                        }}
                        onBlur={() => {
                          setFieldTouched("phoneNumber", "");
                        }}
                        value={values.phoneNumber}
                        onChangeText={handleChange("phoneNumber")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.errorMessage}>
                        {errors.phoneNumber}
                      </Text>
                    )}
                  </View>
                  {/* Email */}
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
                  {/* password */}
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
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>
                  {/* Confirm password */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.confirmPassword
                          ? COLORS.secondary
                          : COLORS.offwhite
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
                        placeholder="Enter Confirm Password"
                        onFocus={() => {
                          setFieldTouched("confirmPassword");
                        }}
                        onBlur={() => {
                          setFieldTouched("confirmPassword", "");
                        }}
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
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
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <Text style={styles.errorMessage}>
                        {errors.confirmPassword}
                      </Text>
                    )}
                  </View>
                  <SubmitButton
                    title={"S I G N U P"}
                    onPress={isValid ? handleSubmit : () => isValidForm()}
                    isValid={isValid}
                  />
                  <View>
                    <Text style={styles.registrationBtn}>
                      Already have an account?
                      <Text onPress={() => navigation.navigate("Login")}>
                        {" Login"}
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
