import { Image, StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <Text>hey</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/devil-logo.png")}
          style={styles.brandLogo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green",
  },
  brandLogo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  infiniteScrollContainer: {
    flex: 0.8,
    backgroundColor: "red",
  },
});
