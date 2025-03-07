import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../features/calendar/components/SideBar";
import { Outlet } from "react-router";
import { Header } from "@/features/calendar/components/Header";
import { useState } from "react";



export function MainLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const handleSidebarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <Flex direction={"column"} height={"100vh"}>
      <Header
        userName="TestUser"
        onSidebarToggle={handleSidebarOpen}
      />

      {/* コンテンツ領域 */}
      <Flex mt="60px" height={"calc(100vh - 60px)"} bg={"gray.100"}>
        <SideBar isOpen={isSideBarOpen}/>
        <Box flex={1} overflow={"auto"} p="4">
          {/* ここに各ページのコンポーネントが表示される */}
          <Outlet />
        </Box>

      </Flex>
    </Flex>
  );
}
