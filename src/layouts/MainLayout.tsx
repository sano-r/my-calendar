import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../features/calendar/components/SideBar";
import { Outlet } from "react-router";
import { Header } from "@/features/calendar/components/Header";

export function MainLayout() {
  return (
    <Flex direction={"column"} height={"100vh"}>
      <Header username="テスト"/>

      {/* コンテンツ領域 */}
      <Flex mt="60px" height={"calc(100vh - 60px)"}>
        <SideBar />
        <Box flex={1} overflow={"auto"} p="4">
          {/* ここに各ページのコンポーネントが表示される */}
          <Outlet />
        </Box>

      </Flex>
    </Flex>
  );
}
