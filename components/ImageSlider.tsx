// ImageSlider.tsx

import React, { useState } from "react";
import {
  Box,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const ImageSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const imageContainerStyle: React.CSSProperties = {
    width: "300px", // Adjust the width as needed
    height: "300px", // Adjust the height as needed
    overflow: "hidden",
    position: "relative",
  };

  const image1Style: React.CSSProperties = {
    width: "100%",
  };

  const image2Style: React.CSSProperties = {
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    clipPath: `inset(0% ${100 - sliderValue}% 0% 0%)`,
  };

  return (
    <Box boxSize={400}>
      <Slider
        min={0}
        max={100}
        value={sliderValue}
        onChange={(value) => setSliderValue(value)}
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
