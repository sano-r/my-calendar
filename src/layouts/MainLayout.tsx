import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../features/calendar/components/SideBar";
import { Outlet } from "react-router";
import { Header } from "@/features/calendar/components/Header";



export function MainLayout() {
  return (
    <Flex direction={"column"} height={"100vh"}>
      <Header userName="TestUser" onSidebarToggle={function (): void {
        throw new Error("Function not implemented.");
      }} currentDate={new Date()} setCurrentDate={function (date: Date): void {
        throw new Error("Function not implemented.");
      }} viewMode={"week"} onViewModeChange={function (mode: "week" | "month"): void {
        throw new Error("Function not implemented.");
      }} />

      {/* コンテンツ領域 */}
      <Flex mt="60px" height={"calc(100vh - 60px)"} bg={"gray.100"}>
        <SideBar />
        <Box flex={1} overflow={"auto"} p="4">
          {/* ここに各ページのコンポーネントが表示される */}
          <Outlet />
        </Box>

      </Flex>
    </Flex>
  );
}
