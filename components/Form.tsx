// ambiance for particulier

// pour entreprise type de boutique etc

// differentiate between pallettes and ambiances

// revetement all horizantal line

// before house images
// user_images suggestion for images from pintrest or pdf ' vos inspiration '

// user_images required
// votre espace a concevoir
//     plan
//     image
//     video
//     dessin ameliore

import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  VStack,
  Progress,
  Text,
  Stack,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Flex,
  GridItem,
  Grid,
  Checkbox,
  Input,
  Container,
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
import { createUserImage } from "@/app/Redux/Features/userImage";
import { createOrder } from "@/app/Redux/Features/orderSlice";

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

const StepForm: React.FC = () => {
  const totalSteps = 7;

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const [nextButtonLabel, setNextButtonLabel] = useState("Next");
  const [previousButtonLabel, setpPreviousButtonLabel] = useState("Previous");

  const dispatch: AppDispatch = useDispatch();
  const orderForm: OrderForm = useSelector(
    (state: RootState) => state.orderForm
  );
  const userInfoString =
    typeof window !== "undefined" ? localStorage.getItem("userInfo") : null;
  const user_id = userInfoString ? JSON.parse(userInfoString).user_id : null;

  useEffect(() => {
    if (user_id) {
      dispatch(updateOrderField({ field: "user", value: user_id }));
    }
  }, [user_id, dispatch]);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNextClick = () => {
    console.log(step);

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

  const handlePreviousClick = () => {
    prevStep();
  };

  return (
    <Container padding={8} maxWidth={1600} alignItems="center">
      <Grid templateColumns="1fr 4fr 1fr">
        <GridItem>
          <Button
            isDisabled={step === 1}
            marginRight={4}
            onClick={handlePreviousClick}
          >
            <ArrowBackIcon boxSize={4} />
            {previousButtonLabel}
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
          {step === 5 && <Step5 />}
          {step === 6 && <Step6 />}
          {step === 7 && <Step7 />}
        </GridItem>
        <GridItem>
          <Button
            ml={20}
            onClick={handleNextClick}
            isDisabled={step === totalSteps || nextButtonDisabled}
          >
            {step < totalSteps ? nextButtonLabel : "Finish"}
            <ArrowForwardIcon boxSize={4} />
          </Button>
        </GridItem>
      </Grid>
    </Container>
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
    <SimpleGrid columns={2} spacing={5} minChildWidth="200px">
      {categories.map((category: Category) => (
        <Card key={category.id}>
          <CardBody
            onClick={() => handleCategoryChange(category.id)}
            // borderWidth={selectedCategory === category.id ? "2px" : ""}
            borderColor={
              selectedCategory === category.id ? "brand_yellow.500" : ""
            }
            backgroundColor={
              selectedCategory === category.id ? "yellow.300" : ""
            }
            position="relative"
          >
            <Checkbox
              position="absolute"
              top="2"
              right="2"
              isChecked={selectedCategory === category.id}
              size="md"
              colorScheme="brand_blue"
              zIndex="1"
            />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {category.name}
              </Heading>
              <Text pt="2" fontSize="sm">
                {category.description}
              </Text>
            </Box>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

const Step2: React.FC<{ selectedCategory: number }> = ({
  selectedCategory,
}) => {
  const [selectedType, setSelectedType] = useState(0);
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
    setSelectedType(type_id);
  };

  useEffect(() => {
    dispatch(updateOrderField({ field: "type", value: selectedType }));
  }, [selectedType]);

  return (
    <SimpleGrid minChildWidth="200px" spacing={10}>
      {filteredTypes.map((type: Type) => (
        <Card key={type.id}>
          <CardBody
            backgroundColor={selectedType === type.id ? "yellow.200" : ""}
            onClick={() => handleTypeChange(type.id)}
          >
            <Checkbox
              position="absolute"
              top="2"
              size="md"
              zIndex="1"
              right="2"
              colorScheme="brand_blue"
              isChecked={selectedType === type.id}
            />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {type.name}
              </Heading>
              <Image src={type.image_url} alt={type.name} boxSize="200px" />
            </Box>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

const Step3: React.FC = () => {
  const [selectedPalette, setPalette] = useState(0);
  const [selectedAmbiance, setAmbiance] = useState(0);

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
    dispatch(updateOrderField({ field: "ambiance", value: selectedAmbiance }));
  }, [selectedAmbiance]);

  return (
    <Box padding={2}>
      <SimpleGrid columns={1} minChildWidth="600px">
        {palettes.map((palette) => (
          <Box
            backgroundColor={selectedPalette === palette.id ? "yellow.200" : ""}
            onClick={() => handlePaletteChange(palette.id)}
            key={palette.id}
          >
            <Checkbox
              position="absolute"
              top="2"
              size="md"
              zIndex="1"
              right="2"
              colorScheme="brand_blue"
              isChecked={selectedPalette === palette.id}
            />
            <Heading size="xs" textTransform="uppercase">
              {palette.name}
            </Heading>
            <Image src={palette.image_url} alt={palette.name} boxSize="200px" />
          </Box>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={3} spacing="20px" minChildWidth="250px">
        {ambiances.map((ambiance) => (
          <Box key={ambiance.id} padding={1}>
            <Card>
              <CardBody
                backgroundColor={
                  selectedAmbiance === ambiance.id ? "yellow.200" : ""
                }
                onClick={() => handleAmbianceChange(ambiance.id)}
              >
                <Checkbox
                  position="absolute"
                  top="2"
                  size="md"
                  zIndex="1"
                  right="2"
                  colorScheme="brand_blue"
                  isChecked={selectedAmbiance === ambiance.id}
                />
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
        ))}
      </SimpleGrid>
    </Box>
  );
};

const Step4: React.FC = () => {
  const [selectedRevetement, setRevetement] = useState(0);

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
    dispatch(
      updateOrderField({ field: "revetment", value: selectedRevetement })
    );
  }, [selectedRevetement]);

  return (
    <SimpleGrid columns={1}>
      {revetements.map((revetement) => (
        <Box key={revetement.id}>
          <Card>
            <CardBody
              backgroundColor={
                selectedRevetement === revetement.id ? "yellow.200" : ""
              }
              onClick={() => handleRevetementChange(revetement.id)}
            >
              <Checkbox
                position="absolute"
                top="2"
                size="md"
                zIndex="1"
                right="2"
                colorScheme="brand_blue"
                isChecked={selectedRevetement === revetement.id}
              />
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
        </Box>
      ))}
    </SimpleGrid>
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (user && selectedFile) {
      dispatch(createUserImage({ user: user, image: selectedFile }) as any);
    }
  };

  return (
    <Box>
      <Box mb="4">
        <label>Choose Image:</label>
        <Input type="file" onChange={handleFileChange} />
      </Box>

      <Button colorScheme="teal" onClick={handleUpload}>
        Upload
      </Button>
    </Box>
  );
};

const Step7: React.FC = () => {
  const dispatch = useDispatch();

  const orderForm: OrderForm = useSelector(
    (state: RootState) => state.orderForm
  );

  const order_object = {
    user: orderForm.user,
    category: orderForm.category,
    type: orderForm.type,
    ambiance: orderForm.ambiance,
    revetment: orderForm.revetment,
  };
  const handleCreateOrder = () => {
    console.log(order_object);
    dispatch(createOrder(order_object) as any);
  };

  return (
    <VStack align="stretch">
      <Button onClick={handleCreateOrder}>submit</Button>
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
