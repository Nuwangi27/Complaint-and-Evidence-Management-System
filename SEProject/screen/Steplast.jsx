import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./steptwo.style";
import { Video, ResizeMode } from "expo-av";

const Steplast = ({ onNext, onPrevious, formData, setFormData }) => {
  const video = React.useRef(null);
  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    setFormData({ ...formData });
    onPrevious();
  };
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
        <Text style={styles.previewSubTitle}>Yesh</Text>
        {/* Last Name */}
        <Text style={styles.previewTitle}>Last Name:</Text>
        <Text style={styles.previewSubTitle}>Adithya</Text>
        {/* Address */}
        <Text style={styles.previewTitle}>Address:</Text>
        <Text style={styles.previewSubTitle}>Rawathawaththa, Moratuwa</Text>
        {/* National ID */}
        <Text style={styles.previewTitle}>National ID:</Text>
        <Text style={styles.previewSubTitle}>980852480V</Text>
        {/* Email */}
        <Text style={styles.previewTitle}>Email address:</Text>
        <Text style={styles.previewSubTitle}>yesh.adithya@gmail.com</Text>

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
        <Text style={styles.previewTitle}>To Departments:</Text>
        {JSON.parse(JSON.stringify(formData.departments)).map(
          (value, index) => (
            <Text style={styles.previewSubTitle} key={index}>
              {value}
            </Text>
          )
        )}

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
