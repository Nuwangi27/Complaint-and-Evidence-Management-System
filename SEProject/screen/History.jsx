import { View, Image, FlatList, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../constants";
import HistoryRow from "../components/history/HistoryRow";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    _id: "123424rfwcdsx",
    complaintCategory: "Murder",
    complaintText:
      "I am writing to report a murder case involving [Victim's Name] on [Date] at [Location]. I have information that could aid your investigation.Please investigate this matter promptly to ensure justice for the victim's family and our community.I'm available for cooperation and can be reached at [Your Contact Info].",
    status: "Pending",
    attachment:
      "https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    policeStation: "Kotuwa Police Station",
    district: "Colombo District",
  },
  {
    _id: "213rwergthfgyju",
    complaintCategory: "Murder",
    complaintText:
      "I am writing to report a murder case involving [Victim's Name] on [Date] at [Location]. I have information that could aid your investigation.Please investigate this matter promptly to ensure justice for the victim's family and our community.I'm available for cooperation and can be reached at [Your Contact Info].",
    status: "Resolved",
    attachment:
      "https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    policeStation: "Kuliyapitiya Police Station",
    district: "Kurunegal District",
  },
  {
    _id: "2ewqrgrgef",
    complaintCategory: "Murder",
    complaintText:
      "I am writing to report a murder case involving [Victim's Name] on [Date] at [Location]. I have information that could aid your investigation.Please investigate this matter promptly to ensure justice for the victim's family and our community.I'm available for cooperation and can be reached at [Your Contact Info].",
    status: "Inprogress",
    attachment:
      "https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    policeStation: "Galle Police Station",
    district: "South District",
  },
];

const History = () => {
  const [searchresults, setSearchResults] = useState([]);
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    const data = JSON.parse(jsonValue);
    const token = data.token; // Replace with your actual bearer token
    // Implement the logic to resend the OTP here

    try {
      const response = await axios.get(
        "https://backend-se-api.onrender.com/api/complainers/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert("Oops", "Error: " + error);
      // Handle errors here
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView>
      {searchresults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/q-mark.png")}
            style={{
              resizeMode: "contain",
              width: SIZES.width,
              height: SIZES.height,
            }}
          />
        </View>
      ) : (
        <FlatList
          data={searchresults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <HistoryRow item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default History;
