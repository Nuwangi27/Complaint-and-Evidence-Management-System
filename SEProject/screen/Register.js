import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [password, setPassword] = useState("");
  const [idnumber, setidnumber] = useState("");

  const [contactNumber, setContactNumber] = useState("");

  const handleRegister = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Contact Number:", contactNumber);
    console.log("address", address);
    console.log("ID Number:", idnumber);
  };

  return (
    <View style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Create an Account</Text>

        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email Address"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="ID Number"
              style={styles.input}
              onChangeText={(text) => setidnumber(text)}
              value={idnumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Address"
              style={styles.input}
              onChangeText={(text) => setaddress(text)}
              value={address}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Date of Birth"
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Gender"
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Contact Number"
              style={styles.input}
              onChangeText={(text) => setContactNumber(text)}
              value={contactNumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#130A49",
    marginTop: 70,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#E6A300",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    width: "100%",
    marginBottom: 20,
  },
});
