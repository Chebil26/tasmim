// Import necessary dependencies
import { Box, Grid, Text, Image, Container } from "@chakra-ui/react";
import React from "react";

// Define your data for each rectangle
const rectanglesData = [
  {
    header: "Rectangle 1",
    text: "Some text for Rectangle 1",
    imageUrl: "https://placekitten.com/100/100", // Example image URL
  },
  {
    header: "Rectangle 2",
    text: "Some text for Rectangle 2",
    imageUrl: "https://placekitten.com/100/101", // Example image URL
  },
  {
    header: "Rectangle 3",
    text: "Some text for Rectangle 3",
    imageUrl: "https://placekitten.com/101/100", // Example image URL
  },
  {
    header: "Rectangle 4",
    text: "Some text for Rectangle 4",
    imageUrl: "https://placekitten.com/101/101", // Example image URL
  },
];

const RectangleGrid = () => {
  return (
    <Container maxW={"8xl"} p={20}>
      <Grid templateColumns="repeat(2, 1fr)" gap={12}>
        {rectanglesData.map((rectangle, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="sm"
            overflow="hidden"
            position="relative"
            bg="orange.100" // Set your desired background color
            height="180px"
          >
            <Text fontSize="xl" fontWeight="bold" color="brand_blue">
              {rectangle.header}
            </Text>
            <Text mt={2}>{rectangle.text}</Text>
            <Image
              src={rectangle.imageUrl}
              alt={`Image ${index + 1}`}
              p={2}
              mt={2}
              position="absolute"
              top="0"
              right="0"
              width="90px" // Adjust the width as needed
              height="90px" // Adjust the height as needed
            />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default RectangleGrid;
