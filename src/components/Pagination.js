import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { useSelector } from "react-redux";

const PaginationButton = ({ label, onPress, isDisabled }) => (
  <TouchableOpacity
    style={[styles.button, isDisabled && styles.disabledButton]}
    onPress={onPress}
    disabled={isDisabled}
  >
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const ArrowButton = ({ direction, onPress, isDisabled }) => {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabledButton]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Icon size={18} color="#fff" />
    </TouchableOpacity>
  );
};

export default function Pagination({ handleChangePage }) {
  const pageSlice = useSelector((state) => state.page);

  const handleNextPage = () => {
    if (pageSlice.currentPage < pageSlice.totalPage) {
      handleChangePage(pageSlice.currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageSlice.currentPage > 1) {
      handleChangePage(pageSlice.currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      {pageSlice.currentPage > 1 && (
        <>
          <ArrowButton
            direction="left"
            onPress={handlePreviousPage}
            isDisabled={false}
          />
          <PaginationButton
            label={pageSlice.currentPage - 1}
            onPress={() => handleChangePage(pageSlice.currentPage - 1)}
            isDisabled={false}
          />
        </>
      )}

      <PaginationButton
        label={pageSlice.currentPage}
        onPress={() => {}}
        isDisabled={true}
      />
      <PaginationButton
        label={pageSlice.currentPage + 1}
        onPress={() => handleChangePage(pageSlice.currentPage + 1)}
        isDisabled={pageSlice.currentPage >= pageSlice.totalPage}
      />
      <PaginationButton label="..." onPress={() => {}} isDisabled={true} />
      <PaginationButton
        label={pageSlice.totalPage}
        onPress={() => handleChangePage(pageSlice.totalPage)}
        isDisabled={pageSlice.currentPage === pageSlice.totalPage}
      />
      {pageSlice.currentPage < pageSlice.totalPage && (
        <ArrowButton
          direction="right"
          onPress={handleNextPage}
          isDisabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#EF5350",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#B0BEC5",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
