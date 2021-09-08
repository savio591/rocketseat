import {
  Flex,
  Text,
  Input,
  Icon,
  HStack as Stack,
  Box,
  Avatar,
} from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header(): JSX.Element {
  return (
    <Flex
      width="100%"
      as="header"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w={64}>
        dashgo
        <Text as="span" ml={1} color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex={1}
        py={4}
        px={8}
        ml={6}
        maxW={480}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px={4}
          mr={4}
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>

      <Flex align="center" ml="auto">
        <Stack
          spacing={8}
          mx={8}
          pr={8}
          py={1}
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserAddLine} />
        </Stack>
        <Flex align="center">
          <Box mr={4} textAlign="right">
            <Text>Savio Castelo</Text>
            <Text fontSize="small">savio591@hotmail.com</Text>
          </Box>
          <Avatar name="Savio Castelo" src="https://github.com/savio591.png" />
        </Flex>
      </Flex>
    </Flex>
  );
}
