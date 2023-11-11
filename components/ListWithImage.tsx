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
    <Container>
      <Stack direction="row" spacing={16}>
        <Box
          borderLeftWidth={1}
          borderColor="gray.100"
          paddingY={2}
          paddingRight={4}
        >
          <List spacing={3} minWidth={200}>
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
        <VStack align="start">
          {selectedItem && (
            <Box boxSize={400} borderRadius="20%">
              <Image src={selectedItem.imageUrl} alt={selectedItem.title} />
            </Box>
          )}
        </VStack>
      </Stack>
    </Container>
  );
};

export default ListWithImage;
