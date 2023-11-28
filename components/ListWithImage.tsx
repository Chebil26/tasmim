// ListWithImage.tsx
import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  Image,
  Text,
  Container,
  Stack,
  VStack,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";

interface ListItemData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ListWithImageProps {
  items: ListItemData[];
}

const ListWithImage: React.FC<ListWithImageProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<ListItemData | null>(
    items[0]
  );

  const handleItemClick = (item: ListItemData) => {
    setSelectedItem(item);
  };

  return (
    <Container maxW={"6xl"} p={20}>
      <chakra.h1
        color={"brand_blue.500"}
        textAlign={"left"}
        fontSize={"4xl"}
        py={5}
        fontWeight={"bold"}
      >
        Ce que vous recevez:
      </chakra.h1>
      <SimpleGrid minChildWidth="400px">
        <Box
          borderLeftWidth={1}
          borderColor="gray.100"
          paddingY={2}
          paddingRight={20}
        >
          <List spacing={3} minWidth={300}>
            {items.map((item) => (
              <ListItem
                key={item.id}
                cursor="pointer"
                onClick={() => handleItemClick(item)}
                borderLeftWidth={4}
                borderLeftColor={
                  selectedItem?.id === item.id
                    ? "brand_blue.500"
                    : "transparent"
                }
                paddingLeft={2}
                _hover={{ bg: "blue.50" }}
              >
                {item.title}
                {selectedItem?.id === item.id && (
                  <Text>{item.description}</Text>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
        {selectedItem && (
          <Box boxSize={400} borderRadius="20%">
            <Image src={selectedItem.imageUrl} alt={selectedItem.title} />
          </Box>
        )}
      </SimpleGrid>
    </Container>
  );
};

export default ListWithImage;
