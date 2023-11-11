// Example usage in another component or page
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ListWithImage from "./ListWithImage";

const WhatYouGet: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "bohohohohoh 1",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 2,
      title: "bohohohohoh 2",
      description: "Description for Item 2.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 3,
      title: "bohohohohoh 3",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
    {
      id: 4,
      title: "bohohohohoh 4",
      description: "Description for Item 1.",
      imageUrl:
        "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/cuisine_image87.jpg",
    },
  ];

  return (
    <ChakraProvider>
      <ListWithImage items={items} />
    </ChakraProvider>
  );
};

export default WhatYouGet;
