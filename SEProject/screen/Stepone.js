import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

import Button2 from "../components/Button2";

export default function App({ navigation }) {
  const [textInputValue, setTextInputValue] = useState("");
  const [selectedSentence, setSelectedSentence] = useState("");

  const sentences = [
    "This is sentence 1.",
    "Here is sentence 2.",
    "Select sentence 3.",
    "Select sentence 4.",
    "Select sentence 5.",
    "Select sentence 6.",
    "Select sentence 7",
  ];

  const handleSentencePress = (sentence) => {
    setSelectedSentence(sentence);
    setTextInputValue(sentence);
  };

  const handleButtonClick = () => {
    // Handle your crime report submission here.
    console.log("Selected Sentence: ", selectedSentence);
    console.log("Reported Crime: ", textInputValue);
    // You can submit the selectedSentence and textInputValue to your server or perform any other actions.
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.white,
            }}
          >
            Report a Crime
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 70,
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22,
            backgroundColor: COLORS.white,
          }}
        >
          <TextInput
            placeholder="Enter crime details"
            placeholderTextColor={COLORS.grey}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            style={{
              width: "80%",
              backgroundColor: "transparent",
            }}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            color: COLORS.white,
          }}
        >
          or select
        </Text>

        {sentences.map((sentence, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSentencePress(sentence)}
          >
            <Text style={{ marginVertical: 10, color: COLORS.white }}>
              {sentence}
            </Text>
          </TouchableOpacity>
        ))}
        <Button2
          title="Proceed"
          onPress={() => navigation.navigate("Steptwo", { selectedSentence })}
          filled
          style={{
            marginTop: 1,
            marginBottom: 10,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
