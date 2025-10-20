// data/slides.ts
import { t } from "i18next";

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: any;
}
const imagesArr = [
  require("../assets/images/Intro1.png"),
  require("../assets/images/Intro2.png"),
  require("../assets/images/Intro3.png"),
  require("../assets/images/Intro4.png"),
];



export const getSlidesData = (): Slide[] => {
  const slides = t("Onboarding.Slides", { returnObjects: true }) as { title: string; subtitle: string }[];
  return slides.map((slide, index) => ({
    ...slide,
    id: index .toString(),
    image: imagesArr[index],
  }));
};
