// ImageSlider.tsx

import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

interface ImageSliderProps {
  image_url_1: string;
  image_url_2: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  image_url_1,
  image_url_2,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(30);
  const [autoSlideInterval, setAutoSlideInterval] =
    useState<NodeJS.Timer | null>(null);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(false);

  useEffect(() => {
    // Start automatic slider movement
    if (!isAutoSliding) {
      const interval = setInterval(() => {
        setSliderValue((prevValue) => {
          // Increment the slider value by a certain amount (e.g., 1)
          const newValue = prevValue + 0.1;
          return newValue > 100 ? 0 : newValue; // Loop back to 0 when the max value is reached
        });
      }, 15); // Adjust the interval duration as needed

      setAutoSlideInterval(interval);
      setIsAutoSliding(true);
    }

    return () => {
      // Clear the interval when the component unmounts
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, [autoSlideInterval, isAutoSliding]);

  const handleSliderClick = () => {
    // Stop automatic slider movement when the user clicks on the slider
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
      setIsAutoSliding(false);
    }
  };

  return (
    <Box
      position={"relative"}
      height={"400px"}
      rounded={"2xl"}
      boxShadow={"2xl"}
      width={"full"}
      overflow={"hidden"}
    >
      <Slider
        min={0}
        max={100}
        value={sliderValue}
        onChange={(value) => setSliderValue(value)}
        onClick={handleSliderClick}
      >
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg="brand_yellow.500" />
        </SliderTrack>
        {/* <SliderThumb boxSize={4} bg="brand_yellow.500"></SliderThumb> */}
      </Slider>
      <Box position="relative">
        <Image src={image_url_1} alt="Image 1" w="100%" />
        <Image
          src={image_url_2}
          alt="Image 2"
          w="100%"
          position="absolute"
          top="0"
          left="0"
          clipPath={`inset(0% ${100 - sliderValue}% 0% 0%)`}
        />
      </Box>
    </Box>
  );
};

export default ImageSlider;
