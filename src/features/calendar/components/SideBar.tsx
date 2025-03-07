import { Box, Flex } from "@chakra-ui/react";
import { PrimaryButton } from "../../../components/PrimaryButton";

export function SideBar() {

  

  return (
    <Box w="80" bg="gray.100" h={"100%"}>
      <Box maxW={"100%"} m={8} direction="column" gap={4} borderWidth={1} borderColor={"black"}>
        <Flex direction={"column"} gap={4}>
          <PrimaryButton alignSelf={"flex-start"}>作成</PrimaryButton>
          <Box w={"100%"} h={"200px"} borderWidth={3} borderColor={"red.600"}>
            <h1>小さいカレンダー</h1>
          </Box>

        </Flex>
      </Box>
    </Box>
  );
}
