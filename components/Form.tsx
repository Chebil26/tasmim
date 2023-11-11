// StepForm.tsx
// on click => selected
import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  VStack,
  Progress,
  Text,
  Stack,
  Radio,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  RadioGroup,
  Flex,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/app/Redux/Features/categorySlice";
import { fetchTypes } from "@/app/Redux/Features/typeSlice";
import { RootState, AppDispatch } from "@/app/Redux/store";
import { fetchAmbiances } from "@/app/Redux/Features/ambianceSlice";
import { fetchRevetements } from "@/app/Redux/Features/revetementSlice";
import { fetchPalettes } from "@/app/Redux/Features/paletteSlice";
import { fetchFurnitureTypes } from "@/app/Redux/Features/furnitureTypeSlice";
import { updateOrderField } from "@/app/Redux/Features/orderFormSlice";

type Category = {
  description: string;
  id: number;
  name: string;
  ref: string;
};

type Type = {
  category: number;
  id: number;
  name: string;
  ref: string;
  description: string;
  image: string;
  image_url: string;
  images: string[];
};

type Palette = {
  id: number;
  name: string;
  ref: string;
  description: string;
  image: string;
  image_url: string;
};

type Ambiance = {
  id: number;
  name: string;
  ref: string;
  description: string;
  image: string;
  image_url: string;
  images: string[];
};

type Revetement = {
  id: number;
  name: string;
  ref: string;
  description: string;
  image_url: string;
  images: string[];
};

type FurnitureType = {
  id: number;
  name: string;
  ref: string;
  image: null | string;
  image_url: string;
  category: number;
  type: number;
  images: string[];
};

type OrderForm = {
  id: number | null;
  ref: string;
  description: string;
  user: number | null;
  category: number | null;
  type: number | null;
  ambiance: number | null;
  revetment: number | null;
  images: any[];
  colors: any[];
  furnitures: any[];
  options: number[];
  questions: any[];
};

let chosen_category: number = 1;

const StepForm: React.FC = () => {
  const totalSteps = 8;

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const [nextButtonLabel, setNextButtonLabel] = useState("Next");
  const dispatch: AppDispatch = useDispatch();
  const orderForm: OrderForm = useSelector(
    (state: RootState) => state.orderForm
  );

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNextClick = () => {
    if (step < totalSteps) {
      nextStep();
      if (step === 1) {
        setNextButtonLabel("Next  2");
      } else if (step === 2) {
        setNextButtonLabel("Next  3");
      } else if (step === 3) {
        setNextButtonLabel("Next  4");
      }
    } else {
      // Add more conditions as needed
    }
  };

  return (
    <Box padding={8} maxWidth={1600} mx="auto">
      <Grid templateColumns="1fr 3fr 1fr">
        <GridItem>
          <Button onClick={prevStep} isDisabled={step === 1}>
            <ArrowBackIcon boxSize={4} />
          </Button>
        </GridItem>
        <GridItem>
          <Progress
            value={(step / totalSteps) * 100}
            mb={4}
            colorScheme="brand_yellow"
          />

          {step === 1 && <Heading mb={4}>Categorie</Heading>}
          {step === 2 && <Heading mb={4}>Type</Heading>}
          {step === 3 && <Heading mb={4}>Ambiance</Heading>}
          {step === 4 && <Heading mb={4}>Revetement</Heading>}

          {step === 1 && (
            <Step1
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          {step === 2 && <Step2 selectedCategory={selectedCategory} />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}

          <Flex justifyContent="space-between" alignItems="center">
            <Button onClick={prevStep} isDisabled={step === 1} marginRight={2}>
              <ArrowBackIcon boxSize={4} />
              Previous
            </Button>

            <Button
              onClick={handleNextClick}
              isDisabled={step === totalSteps || nextButtonDisabled}
            >
              {step < totalSteps ? nextButtonLabel : "Finish"}
              <ArrowForwardIcon boxSize={4} />
            </Button>
          </Flex>
        </GridItem>
        <GridItem>
          <Button
            onClick={handleNextClick}
            isDisabled={step === totalSteps || nextButtonDisabled}
          >
            <ArrowForwardIcon boxSize={4} />
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
const Step1: React.FC<{
  selectedCategory: number;
  setSelectedCategory: (categoryId: number) => void;
}> = ({ selectedCategory, setSelectedCategory }) => {
  // const [selectedCategory, setSelectedCategory] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const categories: Category[] = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (category_id: number) => {
    setSelectedCategory(category_id);
  };

  useEffect(() => {
    dispatch(updateOrderField({ field: "category", value: selectedCategory }));
  }, [selectedCategory]);

  return (
    <RadioGroup>
      <SimpleGrid columns={2} spacing={5} minChildWidth="200px">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardBody>
              <Radio
                colorScheme="brand_yellow"
                onChange={() => handleCategoryChange(category.id)}
                value={category.id.toString()}
              >
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {category.name}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {category.description}
                  </Text>
                </Box>
              </Radio>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </RadioGroup>
  );
};

const Step2: React.FC<{ selectedCategory: number }> = ({
  selectedCategory,
}) => {
  const [type, setType] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const types: Type[] = useSelector((state: RootState) => state.type.types);
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const filteredTypes =
    selectedCategory !== 0
      ? types.filter((obj) => obj.category === selectedCategory)
      : types;

  const handleTypeChange = (type_id: number) => {
    setType(type_id);
  };

  useEffect(() => {
    dispatch(updateOrderField({ field: "type", value: type }));
  }, [type]);

  return (
    <RadioGroup>
      <SimpleGrid minChildWidth="150px" spacing={10}>
        {filteredTypes.map((type) => (
          <Card key={type.id}>
            <CardBody>
              <Radio
                colorScheme="brand_yellow"
                onChange={() => handleTypeChange(type.id)}
                value={type.id.toString()}
              >
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {type.name}
                  </Heading>
                  <Image src={type.image_url} alt={type.name} boxSize="200px" />
                </Box>
              </Radio>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </RadioGroup>
  );
};

const Step3: React.FC = () => {
  const [palette, setPalette] = useState(0);
  const [ambiance, setAmbiance] = useState(0);

  const dispatch: AppDispatch = useDispatch();
  const ambiances: Ambiance[] = useSelector(
    (state: RootState) => state.ambiance.ambiances
  );

  const palettes: Palette[] = useSelector(
    (state: RootState) => state.palette.palettes
  );
  useEffect(() => {
    dispatch(fetchAmbiances());
    dispatch(fetchPalettes());
  }, [dispatch]);

  const handlePaletteChange = (palette_id: number) => {
    setPalette(palette_id);
  };

  const handleAmbianceChange = (ambiance_id: number) => {
    setAmbiance(ambiance_id);
  };

  useEffect(() => {
    // dispatch(updateOrderField({ field: "palette", value: palette }));
    dispatch(updateOrderField({ field: "ambiance", value: ambiance }));
  }, [ambiance]);

  return (
    <Box padding={2}>
      <SimpleGrid columns={1} minChildWidth="600px">
        <RadioGroup>
          {palettes.map((palette) => (
            <Radio
              key={palette.id}
              colorScheme="brand_yellow"
              value={palette.id.toString()}
              onChange={() => handlePaletteChange(palette.id)}
            >
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {palette.name}
                </Heading>
                <Image
                  src={palette.image_url}
                  alt={palette.name}
                  boxSize="200px"
                />
              </Box>
            </Radio>
          ))}
        </RadioGroup>
      </SimpleGrid>

      <SimpleGrid columns={3} spacing="20px" minChildWidth="250px">
        <RadioGroup>
          {ambiances.map((ambiance) => (
            <Radio
              key={ambiance.id}
              value={ambiance.id.toString()}
              colorScheme="brand_yellow"
              onChange={() => handleAmbianceChange(ambiance.id)}
            >
              <Box padding={1}>
                <Card>
                  <CardBody>
                    <Image
                      src={ambiance.image_url}
                      alt={ambiance.name}
                      boxSize="200px"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{ambiance.name}</Heading>
                      <Text>{ambiance.description}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            </Radio>
          ))}
        </RadioGroup>
      </SimpleGrid>
    </Box>
  );
};

const Step4: React.FC = () => {
  const [revetement, setRevetement] = useState(0);

  const dispatch: AppDispatch = useDispatch();
  const revetements: Revetement[] = useSelector(
    (state: RootState) => state.revetement.revetements
  );
  useEffect(() => {
    dispatch(fetchRevetements());
  }, [dispatch]);

  const handleRevetementChange = (revetement_id: number) => {
    setRevetement(revetement_id);
  };

  useEffect(() => {
    dispatch(updateOrderField({ field: "revetment", value: revetement }));
  }, [revetement]);

  return (
    <RadioGroup>
      <SimpleGrid columns={1}>
        {revetements.map((revetement) => (
          <Box key={revetement.id}>
            <Radio
              key={revetement.id}
              value={revetement.id.toString()}
              colorScheme="brand_yellow"
              onChange={() => handleRevetementChange(revetement.id)}
            >
              <Card>
                <CardBody>
                  <Image
                    src={revetement.image_url}
                    alt={revetement.name}
                    boxSize="200px"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{revetement.name}</Heading>
                    <Text>{revetement.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Radio>
          </Box>
        ))}
      </SimpleGrid>
    </RadioGroup>
  );
};

const Step5: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const furnituretypes: FurnitureType[] = useSelector(
    (state: RootState) => state.furnitureType.furnitureTypes
  );
  useEffect(() => {
    dispatch(fetchFurnitureTypes());
  }, [dispatch]);

  return (
    <SimpleGrid columns={1}>
      {furnituretypes.map((furnitureType) => (
        <Box key={furnitureType.id} height="300px">
          <Card>
            <CardBody>
              <Heading size="md">{furnitureType.name}</Heading>
              <Image
                src={furnitureType.image_url}
                alt={furnitureType.name}
                boxSize="100px"
              />
            </CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const Step6: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 6 content</Text>
    </VStack>
  );
};

const Step7: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 6 content</Text>
    </VStack>
  );
};

const Step8: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 4 content</Text>
    </VStack>
  );
};

export default StepForm;
