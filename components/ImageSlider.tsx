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

const ImageSlider: React.FC = () => {
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
          return newValue > 100 ? 0 : newValue; // Loop back to 0 when max value is reached
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
    <Box boxSize={400}>
      <Slider
        min={0}
        max={100}
        value={sliderValue}
        onChange={(value) => setSliderValue(value)}
        onClick={handleSliderClick} // Handle user clicks
      >
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg="brand_yellow.500" />
        </SliderTrack>
        <SliderThumb boxSize={4} bg="brand_yellow.500"></SliderThumb>
      </Slider>
      <Box position="relative">
        <Image
          src="https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/Howie-Kitchen-Before%20(1).jpg"
          alt="Image 1"
          w="100%" // Width set to 100%
        />
        <Image
          src="https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg"
          alt="Image 2"
          w="100%" // Width set to 100%
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
