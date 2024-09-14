import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import RenderHTML from "react-native-render-html";
import { Heart, HeartOff, LogOut } from "lucide-react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteJob, removeFavoriteJob } from "../redux/jobSlice";

export default function JobDetail({ route }) {
  const { itemID } = route.params;

  const [data, loading, error] = useFetch(
    `https://www.themuse.com/api/public/jobs/${itemID}`
  );

  const [isItFavorite, setFavorite] = useState(false);

  const dispatch = useDispatch();
  const favoriteJobs = useSelector((state) => state.favoriteJob.favoriteJob);

  useEffect(() => {
    favoriteJobs.map((job) => job.id == itemID && setFavorite(true));
  }, [itemID]);

  console.log(isItFavorite);

  const handleAddFavorite = () => {
    dispatch(addFavoriteJob(data));
    setFavorite(true);
  };

  const handleDeleteFavorite = () => {
    dispatch(removeFavoriteJob({ id: itemID }));
    setFavorite(false);
  };

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const deviceWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Locations:</Text>
          <Text style={styles.value}>{data.locations[0].name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Job Level:</Text>
          <Text style={styles.value}>{data.levels[0].name}</Text>
        </View>
        <Text style={styles.detailHeader}>Job Detail</Text>
        <RenderHTML
          contentWidth={deviceWidth}
          source={{ html: `${data.contents}` }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL(data.refs.landing_page)}
            style={styles.button}
          >
            <LogOut color="#fff" size={24} />
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={isItFavorite ? handleDeleteFavorite : handleAddFavorite}
            style={styles.button}
          >
            {isItFavorite ? (
              <>
                <HeartOff color="#fff" size={24} fill={"#fff"} />
                <Text style={styles.buttonText}>Unfavorite Job</Text>
              </>
            ) : (
              <>
                <Heart color="#fff" size={24} fill={"#fff"} />
                <Text style={styles.buttonText}>Favorite Job</Text>
              </>
            )}
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
    backgroundColor: "#fff",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#3A4A52",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    color: "#EF5350",
    fontWeight: "500",
    fontSize: 12,
  },
  value: {
    fontWeight: "500",
    fontSize: 12,
  },
  detailHeader: {
    color: "#37474F",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#EF5350",
    width: Dimensions.get("window").width / 2.5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    marginLeft: 5,
  },
});
