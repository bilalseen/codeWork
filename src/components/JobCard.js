import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react-native";
import { useSelector } from "react-redux";

export default function JobCard({ item, navigation }) {
  const [isItFavorite, setFavorite] = useState(false);
  const favoriteJobs = useSelector((state) => state.favoriteJob.favoriteJob);

  const handleNavigateDetail = () => {
    navigation.navigate("JobDetail", { itemID: item.id });
  };

  useEffect(() => {
    const isFavorite = favoriteJobs.some((job) => job.id === item.id);
    setFavorite(isFavorite);
  }, [favoriteJobs, item]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateDetail}>
      <View style={styles.row}>
        <Text style={styles.jobName}>{item.name}</Text>
        {isItFavorite && (
          <View style={styles.iconContainer}>
            <Heart size={24} color={"#EF5350"} fill={"#EF5350"} />
          </View>
        )}
      </View>
      <Text style={styles.jobType}>{item.type}</Text>
      <Text style={styles.locationTag}>{item.locations[0].name}</Text>
      <Text style={styles.levelText}>{item.levels[0].name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: Dimensions.get("window").width * 0.9,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  jobName: {
    fontWeight: "500",
    flex: 10,
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
