import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Savio Castelo</Text>
        <Text fontSize="small">savio591@hotmail.com</Text>
      </Box>
      <Avatar name="Savio Castelo" src="https://github.com/savio591.png" />
    </Flex>
  );
}
