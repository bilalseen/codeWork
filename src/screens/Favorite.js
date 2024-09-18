import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import JobCard from "../components/JobCard";

export default function Favorite({ navigation }) {
  const favoriteJobs = useSelector((state) => state.favoriteJob.favoriteJob);
  if (favoriteJobs.length === 0) {
    return (
      <View style={styles.container}>
        <Text>There is no favorite job</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JobCard item={item} navigation={navigation} />
        )}
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
