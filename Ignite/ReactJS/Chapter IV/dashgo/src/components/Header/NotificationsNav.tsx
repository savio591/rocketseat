import { Icon, HStack as Stack } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav(): JSX.Element {
  return (
    <Stack
      spacing={[6, 8]}
      mx={[6, 8]}
      pr={[6, 8]}
      py={1}
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} />
      <Icon as={RiUserAddLine} />
    </Stack>
  );
}
