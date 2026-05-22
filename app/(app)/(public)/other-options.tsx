import { Fonts } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const OtherOptions = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => router.dismiss()}
      >
        <Ionicons name="close" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Log in or create your{"\n"}Devil Fruit account
      </Text>

      <Animated.View entering={FadeInDown.delay(100)}>
        <Image
          source={require("@/assets/guest.png")}
          style={styles.luffyImage}
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200)}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.otherButton}
          onPress={() => router.replace("../(tabs)/feed")}
        >
          <Text style={styles.otherButtonText}>Signin as a guest</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default OtherOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  closeBtn: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontFamily: Fonts.brandJapanisBold,
    marginTop: 24,
    lineHeight: 34,
  },

  luffyImage: {
    width: 340,
    height: 280,
    resizeMode: "contain",
  },

  otherButton: {
    width: 300,
    height: 64,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "#c6ca49",
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    top: -60,
  },

  otherButtonText: {
    color: "#f8f1a9",
    fontSize: 20,
    fontFamily: Fonts.brandJapanisBold,
  },
});
