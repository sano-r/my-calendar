import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useMemo } from "react";
import { FiChevronLeft, FiChevronRight, FiSettings } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { ViewModeMenu } from "./ViewModeMenu";
import { useCalendarContext } from "../CalendarContext.tsx";

interface HeaderProps {
  onSidebarToggle: () => void;
  userName: string;
  initView: "day" | "week" | "month" | "year";
  onChangeViewMode: (mode: "day" | "week" | "month" | "year") => void;
}

export function Header({
  onSidebarToggle,
  userName,
  initView,
  onChangeViewMode,
}: HeaderProps) {
  // const [currentDate, setCurrentDate] = useState(new Date());
  const { state, dispatch, handleNext, handlePrev } = useCalendarContext();

  const dateString = useMemo(() => {
    return format(state.currentDate, "yyyy年MM月", { locale: ja });
  }, [state.currentDate]);

  function handleClickToday(): void {
    dispatch({type: 'TODAY'});
  }

  console.log(state.currentDate);

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
      zIndex={"100"}
    >
      <Flex align={"center"} gap={3}>
        <IconButton
          fontSize={"2xl"}
          variant={"subtle"}
          colorPalette={"gray"}
          rounded={"full"}
          onClick={onSidebarToggle}
        >
          <RxHamburgerMenu />
        </IconButton>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          my-calendar
        </Text>
        <Button
          rounded={"full"}
          size={"lg"}
          variant={"surface"}
          onClick={handleClickToday}
        >
          今日
        </Button>
        <IconButton
          aria-label="前へ"
          variant={"subtle"}
          fontSize={"2xl"}
          rounded={"full"}
          onClick={handlePrev}
        >
          <FiChevronLeft />
        </IconButton>
        <IconButton
          aria-label="次へ"
          variant={"subtle"}
          fontSize={"2xl"}
          rounded={"full"}
          onClick={handleNext}
        >
          <FiChevronRight />
        </IconButton>
        <Text fontSize={"2xl"} fontWeight={"normal"}>
          {dateString}
        </Text>
      </Flex>

      <Flex align={"center"} gap={3}>
        <IconButton variant={"subtle"} fontSize={"2xl"} rounded={"full"}>
          <FiSettings />
        </IconButton>
        <ViewModeMenu viewMode={initView} handleViewMode={onChangeViewMode} />
        <Text fontSize={"xl"} fontWeight={"semibold"}>
          {userName}
        </Text>
      </Flex>
    </Flex>
  );
}
