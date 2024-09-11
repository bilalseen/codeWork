import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function JobDetail() {
  return (
    <View style={styles.container}>
      <Text>JobDetail</Text>
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
