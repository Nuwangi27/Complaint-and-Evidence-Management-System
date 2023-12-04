import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./historydetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const HistoryDetails = ({navigation}) => {
  const route = useRoute();
  const { item } = route.params;
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <Text style={styles.upperText}>History</Text>
        <Text style={styles.upperText}></Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.previewHeader}>Complaint Informations</Text>
        {/* Complaint Category */}
        <Text style={styles.previewTitle}>Complaint Category:</Text>
        <Text style={styles.previewSubTitle}>{item.category}</Text>
        {/* Complaint Subject */}
        <Text style={styles.previewTitle}>Complaint Subject:</Text>
        <Text style={styles.previewSubTitle}>{item.complaintSubject}</Text>
        {/* Complaint */}
        <Text style={styles.previewTitle}>Complaint:</Text>
        <Text style={styles.previewSubTitle}>{item.complaint}</Text>
        {/* Insident Location */}
        <Text style={styles.previewTitle}>Insident Geo location:</Text>
        <Text style={styles.previewSubTitle}>
          {JSON.stringify(item.selectedLocation.latitude, null, 2)},
          {JSON.stringify(item.selectedLocation.longitude, null, 2)}
        </Text>
        {/* Attachment */}
        <Text style={styles.previewTitle}>Attchment(Video/Image):</Text>
        <View style={styles.secondContainer}>
          {item.attachment &&
            (item.attachmentType === "image" ? (
              <Image
                source={{ uri: item.attachment }}
                style={styles.coverImg}
              />
            ) : item.attachmentType === "video" ? (
              <Video
                ref={video}
                source={{ uri: item.attachment }}
                style={styles.coverVideo}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
              />
            ) : null)}
        </View>

      </View>
    </ScrollView>
  );
};

export default HistoryDetails;
