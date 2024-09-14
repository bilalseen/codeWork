import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteJob } from "../redux/jobSlice";

export default function JobCard({ item, navigation }) {
  const [isItFavorite, setFavorite] = useState(false);
  const favoriteJobs = useSelector((state) => state.favoriteJob.favoriteJob);
  const dispatch = useDispatch();

  const handleNavigateDetail = () => {
    navigation.navigate("JobDetail", { itemID: item.id });
  };

  useEffect(() => {
    const isFavorite = favoriteJobs.some((job) => job.id === item.id);
    setFavorite(isFavorite);
  }, [favoriteJobs, item]);

  const removeFavorite = () => {
    dispatch(removeFavoriteJob(item));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateDetail}>
      <View style={styles.jobInfoContainer}>
        <Text style={styles.jobName}>{item.name}</Text>
        <Text style={styles.jobType}>{item.type}</Text>
        <Text style={styles.locationTag}>{item.locations[0].name}</Text>
        <Text style={styles.levelText}>{item.levels[0].name}</Text>
      </View>
      {isItFavorite && (
        <TouchableOpacity onPress={removeFavorite} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: Dimensions.get("window").width * 0.9,
    minHeight: 120,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
  },
  jobInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  jobName: {
    fontWeight: "500",
    flex: 10,
  },
  jobType: {
    // İhtiyaca göre doldurulabilir
  },
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
  removeButton: {
    backgroundColor: "#EF5350",
    width: "100%",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
