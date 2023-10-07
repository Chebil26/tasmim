import { Box, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/app/Redux/Features/categorySlice";
import { RootState, AppDispatch } from "@/app/Redux/store";

type Category = {
  description: string;
  id: number;
  name: string;
  ref: string;
};

export default function Test() {
  const dispatch: AppDispatch = useDispatch();
  const categories: Category[] = useSelector(
    (state: RootState) => state.categories.categories
  );
  const status = useSelector((state: RootState) => state.categories.status);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      {status === "loading" ? (
        <Spinner size="xl" />
      ) : (
        categories.map((category) => (
          <Box key={category.id}>
            <Text>{category.name}</Text>
          </Box>
        ))
      )}
    </Box>
  );
}
