import { View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import JobCard from "../components/JobCard";

export default function Favorite() {
  const favoriteJobs = useSelector((state) => state.favoriteJob);
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <JobCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
