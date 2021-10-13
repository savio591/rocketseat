import { Box, Text, Stack, Icon, Link } from "@chakra-ui/react";
import { RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps): JSX.Element {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title.toUpperCase()}
      </Text>
      <Stack spacing={4} mt={8} align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
