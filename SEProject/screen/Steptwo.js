import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Button2 from "../components/Button2";
import { useRoute } from "@react-navigation/native";

const COLORS = {
  secondary: "your_secondary_color_here",
  white: "white",
  blue: "blue",
  gray: "gray",
};

export default function App({ navigation }) {
  const route = useRoute();
  const { selectedSentence } = route.params;
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showIncidentDetails, setShowIncidentDetails] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const toggleSection = (sectionName) => {
    if (sectionName === "personalInfo") {
      setShowPersonalInfo(!showPersonalInfo);
      setShowIncidentDetails(false);
    } else if (sectionName === "incidentDetails") {
      setShowPersonalInfo(false);
      setShowIncidentDetails(!showIncidentDetails);
    }
  };

  const toggleDepartmentDropdown = () => {
    setShowDepartmentDropdown(!showDepartmentDropdown);
  };

  const data = [
    { key: "1", value: "Police" },
    { key: "2", value: "Grama Niladari" },
    { key: "3", value: "ABC" },
    { key: "4", value: "XXXXXX" },
    { key: "5", value: "PPPPPPPPP" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionHeaderText}>{selectedSentence} </Text>
        <TouchableOpacity
          onPress={() => toggleSection("personalInfo")}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionHeaderText}>personal Information</Text>
        </TouchableOpacity>
        {showPersonalInfo && (
          <ScrollView style={styles.sectionContent}>
            <>
              <Text style={{ color: COLORS.white }}>First Name:</Text>
              <TextInput
                placeholder="Enter first name"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Last Name:</Text>
              <TextInput
                placeholder="Enter last name"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>ID Number:</Text>
              <TextInput
                placeholder="Enter ID number"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Contact Number:</Text>
              <TextInput
                placeholder="Enter contact number"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Email:</Text>
              <TextInput
                placeholder=" Enter email adress"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Postal code </Text>
              <TextInput
                placeholder="Enter postal code"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                  color: "white",
                }}
              />
              <Text style={{ color: COLORS.white }}>Address:</Text>
              <TextInput
                placeholder="Enter your district"
                placeholderTextColor="white"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Address:</Text>
              <TextInput
                placeholder="Enter your district"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Address:</Text>
              <TextInput
                placeholder="Enter your district"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Address:</Text>
              <TextInput
                placeholder="Enter your district"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
            </>
          </ScrollView>
        )}

        <TouchableOpacity
          onPress={() => toggleSection("incidentDetails")}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionHeaderText}>Incident Details</Text>
        </TouchableOpacity>
        {showIncidentDetails && (
          <ScrollView style={styles.sectionContent}>
            <>
              <Text style={{ color: COLORS.white }}>What happened?:</Text>
              <TextInput
                placeholder="What happened?"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 10,
                  marginTop: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>
                Where did it happend?:
              </Text>
              <TextInput
                placeholder="Where did it happen"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 60,
                  marginTop: 20,
                }}
              />
              <Text style={{ color: COLORS.white }}>
                Upload Evidence(images or videos):
              </Text>
              <TextInput
                placeholder="Upload images & videos"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 40,
                  marginTop: 20,
                }}
              />
              <Text style={{ color: COLORS.white }}>Insident Location:</Text>
              <TextInput
                placeholder="insident Location"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 40,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
            </>
          </ScrollView>
        )}

        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            onPress={toggleDepartmentDropdown}
            style={styles.dropdownHeader}
          >
            <Text style={styles.dropdownHeaderText}>Select Departments:</Text>
          </TouchableOpacity>
          {showDepartmentDropdown && (
            <MultipleSelectList
              setSelected={(selected) => setSelectedDepartments(selected)}
              data={data}
              label="Departments"
              onSelect={() =>
                console.log("Departments selected:", selectedDepartments)
              }
              save="value"
              notFoundText="No data exists"
            />
          )}

          <Button2
            title="Preview"
            onPress={() => navigation.navigate("Bottom Navigation")}
            filled
            style={{
              marginTop: 80,
              marginBottom: 70,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  sectionHeader: {
    marginTop: 10,
    backgroundColor: COLORS.gray,
    padding: 50,
    borderRadius: 5,
  },
  sectionHeaderText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    marginTop: 10,
  },
  dropdownContainer: {
    marginTop: 20,
  },
  dropdownHeader: {
    backgroundColor: COLORS.gray,
    padding: 10,
    borderRadius: 5,
    bottom: 10,
  },
  dropdownHeaderText: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: "bold",
  },
});
