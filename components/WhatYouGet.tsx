// Example usage in another component or page
import React from "react";
import { Box, ChakraProvider, Container, chakra } from "@chakra-ui/react";
import ListWithImage from "./ListWithImage";

const WhatYouGet: React.FC = () => {
  const items = [
    {
      id: 1,
      title: " Une visite 360 degrés",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 2,
      title: "Un plan d'aménagement",
      description: "Description for Item 2.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 3,
      title: "Des préconisations de réalisation",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 4,
      title: "Un accompagnement rigoureux",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 5,
      title: "Des visuels de hautes qualité sous différents angles",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
  ];

  return (
    <Box bg={"yellow.50"}>
      <ListWithImage items={items} />
    </Box>
  );
};

export default WhatYouGet;
