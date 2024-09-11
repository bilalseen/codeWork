import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import JobCard from "../components/JobCard";

export default function Jobs({ navigation }) {
  const API_URL = "https://www.themuse.com/api/public/jobs?page=1";
  const [data, loading, error] = useFetch(API_URL);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
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
