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

const HistoryDetails = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <Text style={styles.upperText}>History</Text>
        <View style={styles.statusWrapper(item.status)}>
            <Text style={styles.status}>{item.status}</Text>
          </View>
      </View>

      <View style={styles.details}>
        <View style={styles.categoryRow}>
          <Text style={styles.category} ellipsizeMode="tail">
            {item.complaintCategory}
          </Text>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text>Complaint Details:</Text>
          <Text style={styles.descText}>{item.complaintText}</Text>
        </View>
      </View>

      <View style={{ marginBottom: SIZES.small }}>
        <View style={styles.location}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-outline" size={20} />
            <Text> {item.policeStation}- {item.policeStation}</Text>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryDetails;
