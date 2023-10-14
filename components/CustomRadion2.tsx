import { Radio, Box, Heading, Text, RadioProps } from "@chakra-ui/react";

interface CustomRadioProps extends RadioProps {
  value: string;
}

const CustomRadio2: React.FC<CustomRadioProps> = ({
  children,
  value,
  ...rest
}) => (
  <Radio
    value={value}
    colorScheme="green"
    size="sm"
    icon={
      <Box
        width="8px"
        height="8px"
        borderRadius="50%"
        backgroundColor="green.500"
        opacity="0"
        transition="opacity 0.3s"
      />
    }
    {...rest}
  >
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {children}
      </Heading>
      <Text pt="2" fontSize="sm">
        {value}
      </Text>
    </Box>
  </Radio>
);

export default CustomRadio2;
