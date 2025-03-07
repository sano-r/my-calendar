import { Text, Avatar, Box, Flex } from "@chakra-ui/react";
import { RiDashboardFill, RiSettings3Fill, RiTaskFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { PrimaryButton } from "../../../components/PrimaryButton";

export function SideBar() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/");
  };

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
