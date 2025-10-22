
import { RootStackNavigationProp } from "@/navigation/Rootstack";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Animated, Dimensions, NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSlidesData, Slide } from "../utils/introData";
import Onboarding from "./Onboarding";

const { width } = Dimensions.get("window");

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const slidesWithImages: Slide[] = getSlidesData() || [];
  const slideCount = slidesWithImages.length;

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const flatListRef = useRef<Animated.FlatList<Slide> | null>(null);




  const handleNext = () => {
    const nextIndex = currentSlide + 1;

    if (nextIndex >= slideCount) {
      navigation.replace("LoginScreenRQ");
      return;
    }

    const offset = nextIndex * width;
    flatListRef.current?.scrollToOffset({ offset, animated: true });
    setCurrentSlide(nextIndex);
  };


//   const handleNext = () => {
//   flatListRef.current?.scrollToOffset({
//     offset: Math.min(
//       (currentSlide + 1) * width, 
//       (slideCount - 1) * width    
//     ),
//     animated: true,
//   });
//   const newOffset = Math.min((currentSlide + 1) * width, (slideCount - 1) * width);
//   const newIndex = Math.round(newOffset / width);
//   setCurrentSlide(newIndex);
// };

  const handleSkip = () => {
    navigation.replace("LoginScreenRQ");
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentSlide(newIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        slides={slidesWithImages}
        currentSlide={currentSlide}
        flatListRef={flatListRef}
        handleNext={handleNext}
        handleSkip={handleSkip}
        handleScrollEnd={handleScrollEnd}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f8" },
});
