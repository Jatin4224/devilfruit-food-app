import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-google" size={18} color={"#fff"} />
      <Text style={styles.appleButtonText}>Continue with Apple</Text>
    </TouchableOpacity>
  );
};

export default AppleAuthButton;

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  appleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
