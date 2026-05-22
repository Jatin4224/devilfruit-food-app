import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native"; // Added Image
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// 1. IMPORT YOUR ASSETS
const iconDataSets = {
  set1: [
    { src: require("@/assets/zoro.png"), color: "#e2f5e8" },
    { src: require("@/assets/luffy.png"), color: "#fad7d7" },
    { src: require("@/assets/sanji.png"), color: "#e2d794" },
    { src: require("@/assets/nami.png"), color: "#fbdbcd" },
  ],
  set2: [
    { src: require("@/assets/nami.png"), color: "#fbdccd" },
    { src: require("@/assets/zoro.png"), color: "#cff3db" },
    { src: require("@/assets/sanji.png"), color: "#f0eac9" },
    { src: require("@/assets/luffy.png"), color: "#f6d0d0" },
  ],
  set3: [
    { src: require("@/assets/luffy.png"), color: "#f9d5d5" },
    { src: require("@/assets/sanji.png"), color: "#e9e2b3" },
    { src: require("@/assets/zoro.png"), color: "#d0ffdf" },
    { src: require("@/assets/luffy.png"), color: "#f6d0d0" },
  ],
};

const ITEM_HEIGHT = 160;
const SCROLL_SPEED = 20;
const GAP = 10;

interface SmoothInfiniteScrollProps {
  scrollDirection?: "up" | "down";
  iconSet?: "set1" | "set2" | "set3";
}

const SmoothInfiniteScroll = ({
  scrollDirection = "down",
  iconSet = "set1",
}: SmoothInfiniteScrollProps) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollY = useSharedValue(0);

  const iconData = iconDataSets[iconSet];
  const items = [...iconData, ...iconData];
  const totalContentHeight = iconData.length * ITEM_HEIGHT;
  const totalWrapHeight = totalContentHeight + iconData.length * GAP;

  useEffect(() => {
    const duration = (totalWrapHeight / SCROLL_SPEED) * 1000;

    if (scrollDirection === "down") {
      scrollY.value = 0;
      scrollY.value = withRepeat(
        withTiming(totalWrapHeight, { duration }),
        -1,
        false,
      );
    } else {
      scrollY.value = totalWrapHeight;
      scrollY.value = withRepeat(withTiming(0, { duration }), -1, false);
    }
  }, [scrollDirection, totalWrapHeight]);

  useAnimatedReaction(
    () => scrollY.value,
    (y) => {
      if (scrollDirection === "down") {
        if (y >= totalContentHeight) {
          scrollY.value = 0;
          scrollTo(scrollRef, 0, 0, false);
        } else {
          scrollTo(scrollRef, 0, y, false);
        }
      } else {
        if (y <= 0) {
          scrollY.value = totalContentHeight;
          scrollTo(scrollRef, 0, totalContentHeight, false);
        } else {
          scrollTo(scrollRef, 0, y, false);
        }
      }
    },
  );

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      ref={scrollRef}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      {items.map((item, idx) => (
        <View
          key={idx}
          style={[styles.iconContainer, { backgroundColor: item.color }]}
        >
          {/* 2. RENDER THE IMAGE */}
          <Image
            source={item.src}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 20,
  },
  iconContainer: {
    width: 160,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  // 3. DEFINE IMAGE SIZE
  iconImage: {
    width: "80%",
    height: "80%",
  },
});

export default SmoothInfiniteScroll;
