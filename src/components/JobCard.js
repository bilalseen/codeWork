import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function JobCard({ item, navigation }) {
  const handleNavigateDetail = () => {
    navigation.navigate("JobDetail", { itemID: item.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateDetail}>
      <Text style={styles.jobName}>{item.name}</Text>
      <Text style={styles.jobType}>{item.type}</Text>
      <Text style={styles.locationTag}>{item.locations[0].name}</Text>
      <Text style={styles.levelText}>{item.levels[0].name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  jobName: {
    fontWeight: "500",
  },
  jobType: {},
  locationTag: {
    backgroundColor: "#EF5350",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 50,
    fontWeight: "500",
  },
  levelText: {
    width: "100%",
    textAlign: "right",
    color: "#EF5350",
    fontWeight: "600",
    fontSize: 12,
  },
});
