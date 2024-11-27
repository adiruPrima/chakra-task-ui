import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex as="nav" bg="gray.700" px="2rem" py="1rem" alignItems="center">
      <Heading as="h1" fontSize="1.3rem" color="teal.200">
        Chakra Task
      </Heading>
      <Spacer />
      <HStack spacing="1.3rem">
        <Avatar name="Naruto" bg="orange.500">
          <AvatarBadge width="1.5rem" bg="teal.500">
            <Text width="xs" color="white" fontSize="0.8rem">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>naruto@konoha.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
