// StepForm.tsx

import React, { useState } from "react";
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

const totalSteps = 4;

type Category = {
  description: string;
  id: number;
  name: string;
  ref: string;
};

type Type = {
  id: number;
  name: string;
  ref: null | string;
  description: null | string;
  image: string; // Assuming the image can be a string or null
  images: string[]; // Assuming images is an array of strings
};

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
        {step === 4 && <Heading mb={4}>aaa</Heading>}

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}

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
  const toast = useToast();

  const dispatch: AppDispatch = useDispatch();
  const categories: Category[] = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  console.log(categories);

  const category1 = categories[0];
  const category2 = categories[1];

  const handleChange = (value: any) => {
    toast({
      title: `Categorie Choisie  ${value}!`,
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
        <CardBody>
          <HStack divider={<StackDivider />} spacing="4">
            {categories.map((category) => (
              <Box key={category.id}>
                <Heading size="xs" textTransform="uppercase">
                  <CustomRadio
                    desc={category.name}
                    {...getRadioProps({ value: category.name })}
                  />
                </Heading>
                <Text pt="2" fontSize="sm">
                  {category.description}
                </Text>
              </Box>
            ))}
          </HStack>
        </CardBody>
      </Card>
    </>
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
                  <Image src={type.image} />
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
  return (
    <VStack align="stretch">
      <Text>Step 3 content</Text>
    </VStack>
  );
};

const Step4: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 4 content</Text>
    </VStack>
  );
};

// Add more Step components (Step3, Step4, ..., Step9) similarly

export default StepForm;
