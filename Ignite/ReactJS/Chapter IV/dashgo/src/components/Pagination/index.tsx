import { Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(): JSX.Element {
  return (
    <Stack direction="row" mt={8} justify="space-between">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}
