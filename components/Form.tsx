// StepForm.tsx

import React, { useState } from "react";
import { API_BASE_URL } from "@/config";
import {
  Box,
  Button,
  Heading,
  VStack,
  Progress,
  Text,
  Stack,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  StepIcon,
  Flex,
  useColorModeValue,
  Icon,
  FormLabel,
  FormControl,
  Checkbox,
  useRadioGroup,
  HStack,
  Radio,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Image,
  SimpleGrid,
  RadioGroup,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import CustomRadio from "./Radio";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/app/Redux/Features/categorySlice";
import { fetchTypes } from "@/app/Redux/Features/typeSlice";
import { RootState, AppDispatch } from "@/app/Redux/store";
import { cp } from "fs";
import { fetchAmbiances } from "@/app/Redux/Features/ambianceSlice";
import Head from "@/app/head";
import { fetchRevetements } from "@/app/Redux/Features/revetementSlice";
import CustomRadio2 from "./CustomRadion2";
import { fetchPalettes } from "@/app/Redux/Features/paletteSlice";

const totalSteps = 8;

type Category = {
  description: string;
  id: number;
  name: string;
  ref: string;
};

type Type = {
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

let chosen_category: number = 1;

const StepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <Box p={8} maxWidth={1200} mx="auto">
      <VStack align="stretch">
        <Progress value={(step / totalSteps) * 100} mb={4} />
        {/* <Stack>
          <Stepper size="sm" index={step} gap="0">
            {steps.map((step, index) => (
              <Step key={index} gap="0">
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <StepSeparator _horizontal={{ ml: "0" }} />
              </Step>
            ))}
          </Stepper>
          <Text>
            Step {activeStep + 1}: <b>{activeStepText}</b>
          </Text>
        </Stack> */}

        {step === 1 && <Heading mb={4}>Categorie</Heading>}
        {step === 2 && <Heading mb={4}>Type</Heading>}
        {step === 3 && <Heading mb={4}>Ambiance</Heading>}
        {step === 4 && <Heading mb={4}>Revetement</Heading>}
        {step === 5 && <Heading mb={4}>...</Heading>}
        {step === 6 && <Heading mb={4}>...</Heading>}
        {step === 7 && <Heading mb={4}>...</Heading>}
        {step === 8 && <Heading mb={4}>...</Heading>}

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 6 && <Step6 />}
        {step === 7 && <Step7 />}
        {step === 8 && <Step8 />}

        <Box display="flex" justifyContent="alignItems">
          <Button onClick={prevStep} isDisabled={step === 1} marginRight={2}>
            Previous
          </Button>

          <Button onClick={nextStep} isDisabled={step === totalSteps}>
            Next
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

const Step1: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories: Category[] = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Particulier",
  });

  return (
    <RadioGroup defaultValue="2">
      <Card>
        <CardBody>
          <HStack divider={<StackDivider />} spacing="200">
            {categories.map((category) => (
              <Radio
                key={category.id}
                colorScheme="teal"
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
            ))}
          </HStack>
        </CardBody>
      </Card>
    </RadioGroup>
  );
};

const Step2: React.FC = () => {
  const toast = useToast();

  const dispatch: AppDispatch = useDispatch();
  const types: Type[] = useSelector((state: RootState) => state.type.types);
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleChange = (value: any) => {
    toast({
      title: `Type Choisie  ${value}!`,
      status: "success",
      duration: 2000,
    });
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Particulier",
    onChange: handleChange,
  });

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Type</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {types.map((type) => (
              <Box key={type.id}>
                <Heading size="xs" textTransform="uppercase">
                  <CustomRadio
                    desc={type.name}
                    {...getRadioProps({ value: type.name })}
                  />
                </Heading>
                <Text pt="2" fontSize="sm">
                  {type.description}
                </Text>
                {/* <Box boxSize="200px">
                  <Image src={`${API_BASE_URL}${type.image}`} />
                </Box> */}
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

const Step3: React.FC = () => {
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

  return (
    <Box padding={2}>
      <SimpleGrid columns={1}>
        <RadioGroup>
          {palettes.map((palette) => (
            <Radio
              key={palette.id}
              colorScheme="teal"
              value={palette.id.toString()}
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
      <SimpleGrid columns={3} spacing="20px">
        {ambiances.map((ambiance) => (
          <Box key={ambiance.id} padding={1}>
            <Card>
              <CardBody>
                <Image src={ambiance.image_url} alt={ambiance.name} />
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
  const dispatch: AppDispatch = useDispatch();
  const revetements: Revetement[] = useSelector(
    (state: RootState) => state.revetement.revetements
  );
  console.log(revetements);
  useEffect(() => {
    dispatch(fetchRevetements());
  }, [dispatch]);

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Particulier",
  });
  return (
    <Box>
      <VStack>
        {revetements.map((revetement) => (
          <Box key={revetement.id} width="1000px" height="250px">
            <Card>
              <CardBody>
                <HStack spacing={300}>
                  <Image
                    src={revetement.image_url}
                    alt={revetement.name}
                    boxSize="200px"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{revetement.name}</Heading>
                    <Text>{revetement.description}</Text>
                  </Stack>
                </HStack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

const Step5: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 4 content</Text>
    </VStack>
  );
};

const Step6: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 4 content</Text>
    </VStack>
  );
};

const Step7: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 4 content</Text>
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
// Add more Step components (Step3, Step4, ..., Step9) similarly

export default StepForm;
