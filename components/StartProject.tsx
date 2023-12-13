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
import { useRouter } from "next/navigation";

const StartProject = () => {
  const router = useRouter();

  const userInfoString =
    typeof window !== "undefined" ? localStorage.getItem("userInfo") : null;
  const user_id = userInfoString ? JSON.parse(userInfoString).user_id : null;

  const handleClick = () => {
    console.log(user_id);
    if (user_id) {
      router.push("/form");
    } else {
      router.push("/signin");
    }
  };
  return (
    <Container alignItems="center">
      <Button
        onClick={handleClick}
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
    </Container>
  );
};

export default StartProject;
