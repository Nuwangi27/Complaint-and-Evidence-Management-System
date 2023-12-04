import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./historyrow.style";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const HistoryRow = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("History Details", { item })}
      >
        <View style={styles.image}>
          <Image
            source={{ uri: item.attachment }}
            style={styles.complaintImg}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="view-headline"
              size={16}
              color={COLORS.gray}
              style={{ marginRight: 3}}
            />
            <Text style={styles.complaintTitle}>{item.category}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="map-marker"
              size={14}
              color={COLORS.gray2}
              style={{ marginRight: 3, marginTop: 3}}
            />
            <Text style={styles.complaintSubTitle}>{item.complaint}</Text>
          </View>
          <View style={{ flexDirection: "row" , }}>
            <MaterialCommunityIcons
              name="progress-clock"
              size={13}
              color={COLORS.gray2}
              style={{ marginRight: 3, marginTop: 3}}
            />
              <Text style={styles.complaintSubTitle}>Latitute: {item.selectedLocation.latitude}- Longtitude: {item.selectedLocation.longitude}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryRow;
