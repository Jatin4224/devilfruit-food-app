import AppleAuthButton from "@/app/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/app/components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "@/app/components/SmoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>

        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>

        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>

        {/* Bottom fade */}
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />

        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      <Image
        source={require("@/assets/images/devil-fruit-logo-normal.png")}
        style={{
          position: "absolute",
          width: 160,
          height: 160,
          marginTop: 300,
          marginRight: 280,
          marginLeft: 120,
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.brandLogo}>
          <Text></Text>
        </View>
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Delivered Across The Grand Line
        </Animated.Text>

        {/* Login buttn */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <GoogleAuthButton />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200)}>
            <AppleAuthButton />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300)}>
            <Link href={"/(app)/(public)/other-options"} asChild>
              <TouchableOpacity style={styles.otherButton}>
                <Text style={styles.otherButtonText}>Other Options</Text>
              </TouchableOpacity>
            </Link>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
    marginBottom: 2,
  },
  tagline: {
    fontSize: 20,
    fontFamily: Fonts.brandJapanisBold,
    textAlign: "center",
    marginBottom: 50,
    // backgroundColor: "grey",
  },
  buttonContainer: {
    gap: 12,

    width: "100%",
    // backgroundColor: "blue",
  },
  otherButton: {
    backgroundColor: "#f5f3ec",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,

    gap: 4,
  },
  otherButtonText: {
    color: "#363636",
    fontSize: 18,
    fontWeight: "600",
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  bgtexture: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
});
