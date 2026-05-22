import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-google" size={18} color={"#fff"} />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#ff9035",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
