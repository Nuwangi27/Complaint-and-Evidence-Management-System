import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { COLORS } from "../constants";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./steptwo.style";
import * as ImagePicker from 'expo-image-picker';

// STEP-2 : INCIDENT DETAILS

const Steptwo = ({ onNext, onPrevious, formData, setFormData }) => {
  const initialRegion = {
    latitude: 7.8731,
    longitude: 80.7718,
    latitudeDelta: 3,
    longitudeDelta: 5,
  };
  const [complaintSubject, setComplaintSubject] = useState(formData.complaintSubject || "");
  const [complaint, setComplaint] = useState(formData.complaint || "");
  const [attachment, setAttachment] = useState(formData.attachment ||null);
  const [attachmentType, setAttachmentType] = useState(formData.attachmentType || null);

  const [selectedLocation, setSelectedLocation] = useState(formData.selectedLocation || null);

  const onMapPress = async (e) => {
    // Get the selected location's latitude and longitude
    const { latitude, longitude } = e.nativeEvent.coordinate;
    console.log(e.nativeEvent.coordinate);
    setSelectedLocation({ latitude, longitude });
  };

  const onButtonPress = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAttachment(result.uri);
      // Determine the type based on the media type
      if (result.type === 'image') {
        setAttachmentType('image');
      } else if (result.type === 'video') {
        setAttachmentType('video');
      }
    }
  };

  const handleNext = () => {
    if (!complaintSubject) {
      Alert.alert("Empty!!!", "Complaint subject field cannot be empty.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!complaint) {
      Alert.alert("Empty!!!", "Complaint field cannot be empty.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!attachment) {
      Alert.alert("Empty!!!", "Attchment field cannot be empty.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!selectedLocation) {
      Alert.alert("Empty!!!", "Please select your Insident location.", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    }else {
      setFormData({ ...formData, complaintSubject, complaint, attachment, attachmentType, selectedLocation });
      onNext();
    }
  };

  const handlePrevious = () => {
    setFormData({ ...formData });
    onPrevious();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.secondContainer}>
        <Text style={styles.sectionHeaderText}>Incident Details</Text>
        <View style={styles.sectionContent}>
          <>
            <Text style={styles.label}>Complaint Subject :</Text>
            <TextInput
              placeholder="Complaint Subject?"
              style={styles.inputConatiner}
              value={complaintSubject}
              onChangeText={(value) => setComplaintSubject(value)}
            />
            <Text style={styles.label}>Complaint :</Text>
            <TextInput
              placeholder="What happened?"
              multiline={true}
              numberOfLines={4}
              style={styles.multiinputConatiner}
              value={complaint}
              onChangeText={(value) => setComplaint(value)}
            />
            <Text style={styles.label}>
              Upload Evidence(images or videos) :
            </Text>
            <View style={styles.inputConatiner}>
              <Text style={{ flex: 1, color: COLORS.gray }}>
               {attachment && attachmentType === 'image' ? "Image Selected" : attachmentType === 'video' ? "Video Selected": "Select a file(Image or Video)"}
              </Text>
              <TouchableOpacity style={styles.btn} onPress={onButtonPress}>
                <Text style={styles.btnText}>Select file</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.label}>
              Select Insident Location on Map :{" "}
              {selectedLocation && (
                <Text style={styles.addressText}>
                  ( {selectedLocation.latitude} - {selectedLocation.longitude} )
                </Text>
              )}
            </Text>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.mapView}
                initialRegion={initialRegion}
                onPress={onMapPress}
                provider={PROVIDER_GOOGLE}
              >
                {selectedLocation && <Marker coordinate={selectedLocation} />}
              </MapView>
            </View>
          </>
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

export default Steptwo;
