import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useUserStore from "@/hooks/use-userstore";

const Page = () => {
  const { setIsGuest } = useUserStore();
  return (
    <View>
      <Text>Page</Text>
      <Button title="Go Login" onPress={() => setIsGuest(false)}></Button>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
