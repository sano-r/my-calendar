import { Box, Flex } from "@chakra-ui/react";
import { PrimaryButton } from "../../../components/PrimaryButton";

interface Props {
  isOpen: boolean;
}
export function SideBar({ isOpen }: Props) {
  return (
    <Box
      w="80"
      bg="gray.100"
      h={"100%"}
      display={isOpen ? "block" : "none"}
      // data-state="close"
      // _open={{
      //   animation: "slide-from-left 300ms",
      // }}
      // _closed={{
      //   animation: "slide-from-right 300ms",
      // }}
    >
      <Box maxW={"100%"} m={8} direction="column" gap={4} >
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
