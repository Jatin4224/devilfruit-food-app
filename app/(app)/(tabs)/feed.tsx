import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function FeedScreen() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.replace("../(auth)/login")}
    >
      <Text
        style={{
          color: "black",
          fontSize: 24,
        }}
      >
        Sign out
      </Text>
    </TouchableOpacity>
  );
}
