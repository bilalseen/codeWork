import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setTotalPage } from "../redux/pageSlice";

export default function Jobs({ navigation }) {
  const currentPage = useSelector((state) => state.page.currentPage);
  const favoriteJobs = useSelector((state) => state.favoriteJob.favoriteJob);
  const API_URL = `https://www.themuse.com/api/public/jobs?page=${currentPage}`;
  const [data, loading, error] = useFetch(API_URL);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.page_count) {
      dispatch(setTotalPage(data.page_count));
    }
  }, [data, dispatch]);

  const handleChangePage = (page) => {
    if (page >= 1 && page <= (data?.page_count || 0)) {
      dispatch(setPage(page));
    }
  };

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

  if (!data || !data.results || data.results.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No jobs available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => (
          <Pagination handleChangePage={handleChangePage} />
        )}
        renderItem={({ item }) => (
          <JobCard item={item} navigation={navigation} />
        )}
        extraData={favoriteJobs}
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
