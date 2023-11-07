"use client";

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      borderTop={"2px"}
      borderColor={useColorModeValue("brand_blue.500", "brand_blue.500")}
    >
      <StatLabel
        fontSize={"xl"}
        fontWeight={"medium"}
        isTruncated
        color="brand_blue.500"
      >
        <Box
          backgroundColor="brand_yellow.500"
          color="brand_blue.500"
          p={2}
          m={2}
          borderRadius="md"
          display="inline-block"
          width="30px"
        >
          {title}
        </Box>
        {stat}
      </StatLabel>
    </Stat>
  );
}

export default function CompanyInfo() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        color={"brand_blue.500"}
        textAlign={"left"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        <Box
          as="span"
          backgroundColor="brand_yellow.500"
          borderRadius="md"
          pl={2}
          pt={1}
          pb={1}
        >
          Co
        </Box>
        mment ?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"1"} stat={"Montrez nous vos besoins"} />
        <StatsCard title={"2"} stat={"Discutez avec nos designers"} />
        <StatsCard title={"3"} stat={"Recevez votre commande"} />
      </SimpleGrid>
    </Box>
  );
}
