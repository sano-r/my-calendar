import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router";
import { Header } from "@/features/calendar/components/Header";
import { useState } from "react";

export function Calendar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [viewMode, setViewMode] = useState<"week" | "day" | "month" | "year">("week");
  const [currentMonth, setCurrentMonth] = useState();
  
  const handleSidebarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleViewMode = (mode: "week" | "day" | "month" | "year") => {
    setViewMode(mode);
  };

  return (
    <Flex direction={"column"} height={"100vh"}>
      <Header
        userName="TestUser"
        onSidebarToggle={handleSidebarOpen}
        initView={viewMode}
        onChangeViewMode={handleViewMode}
      />

      {/* コンテンツ領域 */}
      <Flex mt="60px" height={"calc(100vh - 60px)"} bg={"gray.100"}>

        {/* サイドバー */}
        <SideBar isOpen={isSideBarOpen} />

        {/* メインコンテンツ */}
        <Box
          backgroundColor={"white"}
          h={"100%"}
          rounded={"xl"}
          shadow={"lg"}
          flex={1}
          position={"relative"}
          p={8}
        >
          {/* ここに各ページのコンポーネントが表示される */}
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}
