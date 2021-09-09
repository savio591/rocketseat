import { Stack, Box, Button } from "@chakra-ui/react";

export function Pagination(): JSX.Element {
  return (
    <Stack direction="row" mt={8} justify="space-between">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bgColor: "pink.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="gray.700"
          _hover={{ bg: "gray.500" }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="gray.700"
          _hover={{ bg: "gray.500" }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="gray.700"
          _hover={{ bg: "gray.500" }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
