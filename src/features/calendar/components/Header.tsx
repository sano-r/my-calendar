import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSettings } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
import { ViewModeMenu } from "./ViewModeMenu";

interface HeaderProps {
  onSidebarToggle: () => void;
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  viewMode: 'day' |'week' | 'month' | 'year';
  onViewModeChange: (mode: 'week' | 'month') => void;
  userName: string;
}


export function Header({
  onSidebarToggle,
  currentDate,
  setCurrentDate,
  viewMode,
  onViewModeChange,
  userName
}: HeaderProps) {
  const dateString = useMemo(() => {
    return format(currentDate, 'yyyy年MM月', { locale: ja });
  }, [currentDate])
  const [newViewMode, setNewViewMode] = useState(viewMode);

  function handleClickToday(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  function handlePrevClick(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleNextClick(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  const handleViewMode = (value: 'day' |'week' | 'month' | 'year') => {
    setNewViewMode(value);
  }

  return (
    <Flex
      as="header"
      width="100%"
      height="60px"
      align="center"
      p="4"
      bg="gray.100" // 背景色
      color="black" // 文字色
      position="fixed"
      justify={"space-between"}
    >
      <Flex align={"center"} gap={3}>
        <IconButton fontSize={"2xl"} onClick={alert} variant={"subtle"} colorPalette={"gray"} rounded={"full"}>
          <RxHamburgerMenu />
        </IconButton>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          my-calendar
        </Text>
        <Button rounded={"full"} size={"lg"} variant={"surface"} onClick={handleClickToday}>今日</Button>
        <IconButton aria-label="前へ" variant={"subtle"} fontSize={"2xl"} rounded={"full"} onClick={handlePrevClick}>
          <FiChevronLeft />
        </IconButton>
        <IconButton aria-label="次へ" variant={"subtle"} fontSize={"2xl"} rounded={"full"} onClick={handleNextClick}>
          <FiChevronRight />
        </IconButton>
        <Text fontSize={"2xl"} fontWeight={"normal"}>{dateString}</Text>
      </Flex>


      <Flex align={"center"} gap={3}>
        <IconButton variant={"subtle"} fontSize={"2xl"} rounded={"full"}>
          <FiSettings />
        </IconButton>
        <ViewModeMenu viewMode={newViewMode} handleViewMode={handleViewMode}/>
        <Text fontSize={"xl"} fontWeight={"semibold"}>{userName}</Text>
      </Flex>
    </Flex>
  );
}
