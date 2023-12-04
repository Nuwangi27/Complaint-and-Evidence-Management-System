import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { DEPARTMENT } from "../constants/data";
import styles from "./steptwo.style";
import { SIZES } from "../constants";
import axios from "axios";

// STEP-3 : SELECT DEPARTMENT
const Stepthree = ({ onNext, onPrevious, formData, setFormData }) => {
  const [departments, setSelectedDepartments] = useState([]);
  const [responseDepartments, setResponseDepartments] = useState([]);
  const handleNext = () => {
    if (departments.length=== 0) {
      Alert.alert("Empty!!!", "Please select a department to send the complaint.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      setFormData({ ...formData, departments });
      onNext();
    }
  };

  const getDepartments = async ()=> {
    try {
      const response = await axios.get('https://backend-se-api.onrender.com/api/systemusers/departmensts');
      const options =response.data.map((item) => ({
        value: item.departmentName, // Displayed label
        key: item._id // Unique value associated with each option
      }));
      setResponseDepartments(options)
      // Process the response data here
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert("Oops", "Error: "+ error);
      // Handle errors here
    }
  }


  const handlePrevious = () => {
    setFormData({ ...formData });
    onPrevious();
  };
  useEffect(()=>{
    console.log(formData.departments)
    getDepartments ();
  },[])

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.secondContainer}>
        <Text style={styles.sectionHeaderText}>Select a department </Text>

        <View style={styles.dropdownContainer}>
          <MultipleSelectList
            setSelected={(selected) => setSelectedDepartments(selected)}
            data={responseDepartments}
            label="Departments"
            onSelect={() =>
              console.log("Departments selected:", departments)
            }
            save="key"
            notFoundText="No data exists"
            fontFamily={"semibold"}
            maxHeight={SIZES.height}
          />
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity
            style={styles.btnPrevious}
            onPress={() => handlePrevious()}
          >
            <Text style={styles.btnText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPrevious}
            onPress={() => handleNext()}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stepthree;
