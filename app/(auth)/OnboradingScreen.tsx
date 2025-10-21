
// import { RootStackNavigationProp } from "@/navigation/Rootstack";
// import { useNavigation } from "@react-navigation/native";
// import React, { useRef, useState } from "react";
// import { Animated, Dimensions, NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Onboarding from "../../screens/Onboarding";
// import { getSlidesData, Slide } from "../../utils/introData";

// const { width } = Dimensions.get("window");

// const OnboardingScreen: React.FC = () => {
//   const navigation = useNavigation<RootStackNavigationProp>();
//   const slidesWithImages: Slide[] = getSlidesData() || [];
//   const slideCount = slidesWithImages.length;

//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const flatListRef = useRef<Animated.FlatList<Slide> | null>(null);

//   const handleNext = () => {
//     const nextIndex = currentSlide + 1;

//     if (nextIndex >= slideCount) {
//       navigation.replace("LoginScreenRQ");
//       return;
//     }

//     const offset = nextIndex * width;
//     flatListRef.current?.scrollToOffset({ offset, animated: true });
//     setCurrentSlide(nextIndex);
//   };

//   const handleSkip = () => {
//     navigation.replace("LoginScreenRQ");
//   };

//   const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const offsetX = event.nativeEvent.contentOffset.x;
//     const newIndex = Math.round(offsetX / width);
//     setCurrentSlide(newIndex);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Onboarding
//         slides={slidesWithImages} // مرر البيانات هنا
//         currentSlide={currentSlide}
//         flatListRef={flatListRef}
//         handleNext={handleNext}
//         handleSkip={handleSkip}
//         handleScrollEnd={handleScrollEnd}
//       />
//     </SafeAreaView>
//   );
// };

// export default OnboardingScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f4f6f8" },
// });



import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, Dimensions, NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "../../screens/Onboarding";
import { getSlidesData, Slide } from "../../utils/introData";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const router = useRouter();
  const slidesWithImages: Slide[] = getSlidesData() || [];
  const slideCount = slidesWithImages.length;

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const flatListRef = useRef<Animated.FlatList<Slide> | null>(null);

  const handleNext = () => {
    const nextIndex = currentSlide + 1;

    if (nextIndex >= slideCount) {
     router.replace("../loginScreenRQ");
      return;
    }

    const offset = nextIndex * width;
    flatListRef.current?.scrollToOffset({ offset, animated: true });
    setCurrentSlide(nextIndex);
  };

  const handleSkip = () => {
    router.replace("../loginScreenRQ");
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
