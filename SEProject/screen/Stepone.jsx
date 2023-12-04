import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Button2 from "../components/Button2";
import { CRIMECATEGORIES, SIZES } from "../constants";
import styles from "./stepone.style";
import AsyncStorage from '@react-native-async-storage/async-storage';

// STEP-1 : CRIME TYPE
const Stepone = ({ onNext, formData, setFormData }) => {
  const [category, setCategory] = useState(formData.category || "");
  const [filteredData, setFilteredData] = useState(CRIMECATEGORIES);
  const [user, setuser] = useState("");

  const getUser = async() => {
    const jsonValue = await AsyncStorage.getItem('user');
    const data = JSON.parse(jsonValue);
    setuser(data)
  }
  useEffect(()=>{
    getUser();
  },[])

  const handleNext = () => {
    if (!category) {
      Alert.alert("Empty!!!", "Complaint category field cannot be empty.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      setFormData({ ...formData, user: user._id, category  });
      onNext();
    }
  };

  const handleSentencePress = (sentence) => {
    setCategory(sentence);
  };

  // Function to handle text changes
  const handleTextChange = (text) => {
    // Filter your data based on the text entered
    const filteredData = CRIMECATEGORIES.filter((option) =>
      option.value.toLowerCase().includes(text.toLowerCase())
    );
    setCategory(text);
    setFilteredData(filteredData);
    // You can perform additional actions here as needed
  };

  // Function to highlight matching text
  const getHighlightedText = (text, highlight) => {
    // Split the text into parts before and after the highlight
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <Text key={index} style={styles.highlightedText}>
              {part}
            </Text>
          ) : (
            <Text key={index} style={styles.normalText}>
              {part}
            </Text>
          )
        )}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.headerText}>Complaint Category</Text>

        <View style={styles.inputConatiner}>
          <TextInput
            placeholder="Search for a complaint category"
            placeholderTextColor={COLORS.grey}
            value={category}
            onChangeText={handleTextChange}
            style={{ flex: 1 }}
          />
            <TouchableOpacity style={styles.btn} onPress={handleNext}>
              <Text style={styles.btnText}>Proceed</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.separator}>

        <Text
          style={styles.separatorText}
        >
          Or select
        </Text>

        </View>

        {filteredData.map((sentence, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSentencePress(sentence.value)}
            style={{ marginTop: SIZES.xSmall }}
          >
            {getHighlightedText(sentence.value, category)}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Stepone;
