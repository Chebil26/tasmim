"use client";

import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import ImageSlider from "./ImageSlider";

export default function CallToActionWithVideo() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              color={"brand_blue.500"}
              _after={{
                content: "''",
                width: "full",
                height: "80%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand_yellow.500",
                zIndex: -1,
              }}
            >
              Concevez, Personaliser, Cliquez !
            </Text>
            <br />
            <Text as={"span"} color={"brand_blue.500"}>
              Votre interieur sur mesure
            </Text>
          </Heading>

          <Text color={"gray.500"}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("yellow.50", "brand_yellow.400")}
          />

          <div style={{ width: "100%", height: "100%" }}>
            <ImageSlider
              image_url_1="https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/Howie-Kitchen-Before%20(1).jpg"
              image_url_2="https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg"
            />
          </div>
        </Flex>
      </Stack>
    </Container>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
