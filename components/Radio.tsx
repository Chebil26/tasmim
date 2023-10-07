import { useRadioGroup, useRadio, chakra, Text, Box } from "@chakra-ui/react";

export default function CustomRadio(props: { [x: string]: any; desc: string }) {
  const { desc, ...radioProps } = props;
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Box
        width={600}
        {...getRadioProps()}
        bg={state.isChecked ? "blue.200" : "transparent"}
      >
        <Text>{desc}</Text>
      </Box>
    </chakra.label>
  );
}
