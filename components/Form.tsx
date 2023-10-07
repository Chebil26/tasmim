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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import CustomRadio from "./Radio";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/app/Redux/Features/categorySlice";
import { RootState, AppDispatch } from "@/app/Redux/store";

const totalSteps = 4;

type Category = {
  description: string;
  id: number;
  name: string;
  ref: string;
};

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];
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

        <Heading mb={4}>Step {step}</Heading>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}

        {/* Add more steps similarly for steps 3 to 9 */}

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
    <Stack {...getRootProps()}>
      <Text>{value}</Text>
      <HStack>
        <CustomRadio
          desc={category1.name}
          {...getRadioProps({ value: category1.name })}
        />

        <CustomRadio
          desc={category2.name}
          {...getRadioProps({ value: category2.name })}
        />
      </HStack>
    </Stack>
  );
};

const Step2: React.FC = () => {
  return (
    <VStack align="stretch">
      <Text>Step 2 content</Text>
    </VStack>
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
