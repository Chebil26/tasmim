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
  return <Banner />;
};

const Banner = () => {
  return (
    <Container>
      <Link href="/form">
        <Button
          color="brand_blue.500"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          backgroundColor="brand_yellow.500"
          _hover={{ backgroundColor: "yellow.300" }}
        >
          <VStack>
            <Text>Commencez votre projet !</Text>
            <Icon as={ArrowForwardIcon} ml={2} />
          </VStack>
        </Button>
      </Link>
    </Container>
  );
};

export default StartProject;
