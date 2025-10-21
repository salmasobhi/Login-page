// import { MaterialIcons } from "@expo/vector-icons";
// import { useFonts } from "expo-font";
// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   Animated,
//   Dimensions,
//   I18nManager,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// const { width, height } = Dimensions.get("window");

// type Slide = {
//   id: string;
//   title: string;
//   subtitle: string;
//   image: any; 
// };
// type stringSlider={
// title: string;
//   subtitle: string;
//    image: any; 
// }

// export type OnboardingProps = {
//   currentSlide: number;
//   flatListRef: React.RefObject<Animated.FlatList<Slide> | null>;
//   handleNext: () => void;
//   handleSkip: () => void;
//   handleScrollEnd: (event: any) => void;
// };

// const Onboarding: React.FC<OnboardingProps> = ({
//   flatListRef,
//   handleNext,
//   handleSkip,
//   handleScrollEnd,
// }) => {
//   const { t } = useTranslation();
//   const dataSlide: stringSlider[] = t("Onboarding.Slides", { returnObjects: true }) as stringSlider[];
//   t("Onboarding.Slides", { returnObjects: true });
//    useFonts({
//     "Alexandria-Regular": require("../assets/fonts/Alexandria-Regular.ttf"),
//   });
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   // add image  to the slider 
//   const slidesWithImages = dataSlide.map((slide , index) => ({
//   id: (index + 1).toString(),
//   title: slide.title,
//   subtitle: slide.subtitle,
//   image:  require("../assets/images/Intro4.png"),
// }));
//   const slideCount = (dataSlide as any[]).length;
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   return (
//     <View style={styles.container}>
//       {/* Slides */}
//       <Animated.FlatList
//         ref={flatListRef}
//         data={slidesWithImages}
//         keyExtractor={(item) => item.id.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={handleScrollEnd}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//         renderItem={({ item }) => (
//           <View style={styles.slide}>
//             <Image source={item.image} style={styles.image} />
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.subtitle}>{item.subtitle}</Text>

//               {/* Animated Dots */}
//               <View style={styles.dotsContainer}>
//                 {slidesWithImages.map((_, index) => {
//                   const inputRange = [
//                     (index - 1) * width,
//                     index * width,
//                     (index + 1) * width,
//                   ];
//                   const dotWidth = scrollX.interpolate({
//                     inputRange,
//                     outputRange: [15, 70, 15],
//                     extrapolate: "clamp",
//                   });
//                   const dotColor = scrollX.interpolate({
//                     inputRange,
//                     outputRange: ["#91B1F5", "#2562EB", "#91B1F5"],
//                     extrapolate: "clamp",
//                   });

//                   return (
//                     <Animated.View
//                       key={slidesWithImages[index].id.toString()}
//                       style={[
//                         styles.dot,
//                         {
//                           width: dotWidth,
//                           backgroundColor: dotColor,
//                         },
//                       ]}
//                     />
//                   );
//                 })}
//               </View>
//             </View>
//           </View>
//         )}
//       />


// <View style={styles.buttonContainer}>
//   {currentSlide < slideCount - 1 && (
//     <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//       <Text style={styles.skipText}>{t("Onboarding.skip")}</Text>
//     </TouchableOpacity>
//   )}

//   <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//     <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
//   </TouchableOpacity>
// </View>

//     </View>
//   );
// };

// export default Onboarding;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   slide: { width,  marginTop: 20 },
//   image: {
//     width: width * 0.9,
//     height: height * 0.50,
//     resizeMode: "contain",
//     alignSelf:"center"
//   },
//   textContainer: { flexDirection: "column", paddingHorizontal: 20 },
//   title: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#1E1E1E",
//     fontFamily: "Alexandria-Regular",
//   },
//   subtitle: {
//     fontSize: 15,
//     color: "#414E75",
//     margin:5 ,
//     fontFamily: "Alexandria-Regular",
//   },
//  dotsContainer: {
//   flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
//   justifyContent: I18nManager.isRTL ? "flex-start" : "flex-end",
//   marginBottom: 30,
//   marginTop: 20,
// },

//   dot: {
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     paddingHorizontal: 20,
//     position: "absolute",
//     bottom: 30,
//   },
//   skipButton: { padding: 10 },
//   skipText: { fontSize: 18,color: "#2562EB" ,
//     fontWeight:400,
//     fontFamily:"Alexandria-Regular"},

//   nextButton: {
//     backgroundColor: "#2562EB",
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//   },
// });



import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Dimensions,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Slide } from "../utils/introData";
const { width, height } = Dimensions.get("window");

export type OnboardingProps = {
  slides: Slide[];
  currentSlide: number;
  flatListRef: React.RefObject<Animated.FlatList<Slide> | null>;
  handleNext: () => void;
  handleSkip: () => void;
  handleScrollEnd: (event: any) => void;
};

const Onboarding: React.FC<OnboardingProps> = ({
  slides = [], 
  currentSlide,
  flatListRef,
  handleNext,
  handleSkip,
  handleScrollEnd,
}) => {
  useFonts({
    "Alexandria-Regular": require("../assets/fonts/Alexandria-Regular.ttf"),
  });
 const {t}=useTranslation()
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slideCount = slides.length;
  
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {item.image && <Image source={item.image} style={styles.image} />}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title || ""}</Text>
              <Text style={styles.subtitle}>{item.subtitle || ""}</Text>

              <View
                style={[
                  styles.dotsContainer,
                  {
                    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
 justifyContent: I18nManager.isRTL ? "flex-start" : "flex-end",
                  },
                ]}
              >
                {slides.map((_, index) => {
                  const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                  ];
                  const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [15, 70, 15],
                    extrapolate: "clamp",
                  });
                  const dotColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ["#91B1F5", "#2562EB", "#91B1F5"],
                    extrapolate: "clamp",
                  });

                  return (
                    <Animated.View
                      key={slides[index]?.id?.toString() || index.toString()}
                      style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]}
                    />
                  );
                })}
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        {currentSlide < slideCount - 1 && (
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>{t("Onboarding.skip")}</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <MaterialIcons
            name={I18nManager.isRTL ? "arrow-forward-ios" : "arrow-back-ios"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  slide: { width, marginTop: 20 },
  image: {
    width: width * 0.9,
    height: height * 0.5,
    resizeMode: "contain",
    alignSelf: "center",
  },
  textContainer: { flexDirection: "column", paddingHorizontal: 20 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E1E1E",
    fontFamily: "Alexandria-Regular",
  },
  subtitle: {
    fontSize: 15,
    color: "#414E75",
    margin: 5,
    fontFamily: "Alexandria-Regular",
  },
  dotsContainer: { marginBottom: 30, marginTop: 20, alignItems: "center" },
  dot: { height: 8, borderRadius: 4, marginHorizontal: 4 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 30,
  },
  skipButton: { padding: 10 },
  skipText: { fontSize: 18, color: "#2562EB", fontWeight: "400", fontFamily: "Alexandria-Regular" },
  nextButton: { backgroundColor: "#2562EB", paddingVertical: 15, paddingHorizontal: 15, borderRadius: 8 },
});
