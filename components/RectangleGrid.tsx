// Import necessary dependencies
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  Text,
  Image,
  Container,
  Link,
  Button,
  Icon,
  VStack,
  Flex,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const rectanglesData = [
  {
    header: "Travaillez avec nos designers",
    text: "Some text for Rectangle 1",
    imageUrl: "https://placekitten.com/100/100", // Example image URL
  },
  {
    header: "Nous modifions vos designs jusqu'à 4 fois",
    text: "Some text for Rectangle 2",
    imageUrl: "https://placekitten.com/100/101", // Example image URL
  },
  {
    header: "Recevez une maquette 3D interactive",
    text: "Some text for Rectangle 3",
    imageUrl: "https://placekitten.com/101/100", // Example image URL
  },
  {
    header: "Nous prenons en charge la réalisation",
    text: "Some text for Rectangle 4",
    imageUrl: "https://placekitten.com/101/101", // Example image URL
  },
];

const RectangleGrid = () => {
  return (
    <Container maxW={"8xl"} p={20} display="flex" flexDirection="column">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={12}
      >
        {rectanglesData.map((rectangle, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="medium"
            borderRadius="md"
            borderColor="brand_yellow.500"
            overflow="hidden"
            position="relative"
            height="150px"
            minWidth="200px"
            fontSize="lg"
          >
            <Text fontSize="xl" fontWeight="bold" color="brand_blue.500">
              {rectangle.header}
            </Text>
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
