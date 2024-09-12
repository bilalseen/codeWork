import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import RenderHTML from "react-native-render-html";
import { Heart, LogOut } from "lucide-react-native";

export default function JobDetail({ route }) {
  const { itemID } = route.params;

  const [data, loading, error] = useFetch(
    `https://www.themuse.com/api/public/jobs/${itemID}`
  );

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

  const deviceWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingBottom: 50,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600", color: "#3A4A52" }}>
          {data.name}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ color: "#EF5350", fontWeight: "500", fontSize: 12 }}>
            Locations:
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 12 }}>
            {data.locations[0].name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ color: "#EF5350", fontWeight: "500", fontSize: 12 }}>
            Job Level:
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 12 }}>
            {data.levels[0].name}
          </Text>
        </View>
        <Text
          style={{
            color: "#37474F",
            fontWeight: "600",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Job Detail
        </Text>
        <RenderHTML
          contentWidth={deviceWidth}
          source={{ html: `${data.contents}` }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(data.refs.landing_page)}
            style={{
              backgroundColor: "#EF5350",
              width: deviceWidth / 2.5,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <LogOut color="#fff" size={24} />
            <Text style={{ color: "#fff", fontWeight: "500" }}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#EF5350",
              width: deviceWidth / 2.5,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Heart color="#fff" size={24} fill={"#fff"} />
            <Text style={{ color: "#fff", fontWeight: "500" }}>
              Favorite Job
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: "#fff",
  },
});
