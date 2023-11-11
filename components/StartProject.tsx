"use client";

import {
  chakra,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";

const StartProject = () => {
  return (
    <Container maxW="5xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg={useColorModeValue("gray.100", "gray.700")}
      p={{ base: 8, md: 16 }}
    >
      <Box>
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          Commencez votre projet !
        </chakra.h1>
        <chakra.h2
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          bgGradient="linear(to-l, #0ea5e9,#2563eb)"
          bgClip="text"
        >
          Get in touch or create an account.
        </chakra.h2>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "auto" }}
      >
        <Button
          as={Link}
          href="/form"
          color="brand_blue.500"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          backgroundColor="brand_yellow.500"
          _hover={{ backgroundColor: "yellow.300" }}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default StartProject;
