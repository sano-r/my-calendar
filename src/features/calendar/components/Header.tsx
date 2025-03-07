import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router";

interface HeaderProps {
  username: string;
}

export function Header({ username }: HeaderProps) {
  const navigate = useNavigate();
 
  return (
    <Flex
      as="header"
      width="100%"
      height="60px"
      align="center"
      padding="0 20px"
      bg="gray.100" // 背景色
      color="black" // 文字色
      position="fixed"
    >
      <Heading as="h1" size="xl">
        my-calendar
      </Heading>
      <Spacer />
      <Flex align="center">
        <Heading as="h2" size="md" mr="10px">
          {username}
        </Heading>
        
      </Flex>
    </Flex>
  );
}
