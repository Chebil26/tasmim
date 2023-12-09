"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  chakra,
  Text,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
  Icon,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";

const StartProject = () => {
  return (
    <Container alignItems="center">
      <Link href="/form">
        <Button
          color="brand_blue.500"
          variant="solid"
          size="lg"
          height="100px"
          width="600px"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          backgroundColor="brand_yellow.500"
          _hover={{ backgroundColor: "yellow.300" }}
          rightIcon={<ArrowForwardIcon />}
          fontSize="3xl"
        >
          <Text>Commencez votre projet !</Text>
        </Button>
      </Link>
    </Container>
  );
};

export default StartProject;
