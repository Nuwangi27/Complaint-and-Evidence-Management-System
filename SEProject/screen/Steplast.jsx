import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Alert
} from "react-native";
import styles from "./steptwo.style";
import { Video, ResizeMode } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Steplast = ({ onNext, onPrevious, formData, setFormData }) => {
  const [userData, setUserData] = useState(null);
  const video = React.useRef(null);
  const handleNext = async () => {
    // onNext();
    setFormData({
      ...formData,
      file: {
        uri: formData.attachment,
        type: formData.attachmentType === "image" ? "image/jpeg" : "video/mp4",
        name: formData.attachmentType === "image" ? "file.jpg" : "file.mp4",
      },
    });
    console.log(formData);

    const jsonValue = await AsyncStorage.getItem("user");
    const data = JSON.parse(jsonValue);
    const token = data.token; // Replace with your actual bearer token

    try {
      const response = await axios.post(
        "https://backend-se-api.onrender.com/api/complainers/makeComplaint",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);
      onNext();
      // Process the response data here
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert("Oops", "Error: " + error);
      // Handle errors here
    }
  };

  const handlePrevious = () => {
    setFormData({ ...formData });
    onPrevious();
  };

  const getUser = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    const data = JSON.parse(jsonValue);
    setUserData(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.secondContainer}>
        <Text style={styles.headerText}>Preview</Text>
        <Text style={styles.subHeaderText}>
          Please check all of the information is correct before you submit the
          form
        </Text>
        <Text style={styles.previewHeader}>Personal Informations</Text>
        {/* First Name */}
        <Text style={styles.previewTitle}>First Name:</Text>
        <Text style={styles.previewSubTitle}>
          {userData && userData.firstName}
        </Text>
        {/* Last Name */}
        <Text style={styles.previewTitle}>Last Name:</Text>
        <Text style={styles.previewSubTitle}>
          {userData && userData.lastName}
        </Text>
        {/* Address */}
        <Text style={styles.previewTitle}>Address:</Text>
        <Text style={styles.previewSubTitle}>
          {userData && userData.address}
        </Text>
        {/* National ID */}
        <Text style={styles.previewTitle}>National ID:</Text>
        <Text style={styles.previewSubTitle}>{userData && userData.NIC}</Text>
        {/* Email */}
        <Text style={styles.previewTitle}>Email address:</Text>
        <Text style={styles.previewSubTitle}>{userData && userData.email}</Text>

        <Text style={styles.previewHeader}>Complaint Informations</Text>
        {/* Complaint Category */}
        <Text style={styles.previewTitle}>Complaint Category:</Text>
        <Text style={styles.previewSubTitle}>{formData.category}</Text>
        {/* Complaint Subject */}
        <Text style={styles.previewTitle}>Complaint Subject:</Text>
        <Text style={styles.previewSubTitle}>{formData.complaintSubject}</Text>
        {/* Complaint */}
        <Text style={styles.previewTitle}>Complaint:</Text>
        <Text style={styles.previewSubTitle}>{formData.complaint}</Text>
        {/* Insident Location */}
        <Text style={styles.previewTitle}>Insident Geo location:</Text>
        <Text style={styles.previewSubTitle}>
          {JSON.stringify(formData.selectedLocation.latitude, null, 2)},
          {JSON.stringify(formData.selectedLocation.longitude, null, 2)}
        </Text>
        {/* Attachment */}
        <Text style={styles.previewTitle}>Attchment(Video/Image):</Text>
        <View>
          {formData.attachment &&
            (formData.attachmentType === "image" ? (
              <Image
                source={{ uri: formData.attachment }}
                style={styles.coverImg}
              />
            ) : formData.attachmentType === "video" ? (
              <Video
                ref={video}
                source={{ uri: formData.attachment }}
                style={styles.coverVideo}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
              />
            ) : null)}
        </View>

        {/* Department */}
        {/* <Text style={styles.previewTitle}>To Departments:</Text>
        {JSON.parse(JSON.stringify(formData.departments)).map(
          (value, index) => (
            <Text style={styles.previewSubTitle} key={index}>
              {value}
            </Text>
          )
        )} */}

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
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Steplast;
