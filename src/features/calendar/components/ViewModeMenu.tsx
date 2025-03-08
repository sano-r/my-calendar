import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, Text } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router";

interface Props {
  viewMode: "day" | "week" | "month" | "year";
  handleViewMode: (mode: "day" | "week" | "month" | "year") => void;
}

export function ViewModeMenu({ viewMode, handleViewMode }: Props) {
  return (
    <MenuRoot
      onSelect={(e) =>
        handleViewMode(e.value as "day" | "week" | "month" | "year")
      }
    >
      <MenuTrigger asChild>
        <Button rounded={"full"} size={"lg"} variant={"surface"}>
          {viewMode === "day"
            ? "日"
            : viewMode === "week"
            ? "週"
            : viewMode === "month"
            ? "月"
            : "年"}{" "}
          <FiChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="day" asChild>
          <Link to={"/day"}>
            <Text>日</Text>
          </Link>
        </MenuItem>
        <MenuItem value="week" asChild>
          <Link to={"/"}>
            <Text>週</Text>
          </Link>
        </MenuItem>
        <MenuItem value="month" asChild>
          <Link to={"/month"}>
            <Text>月</Text>
          </Link>
        </MenuItem>
        <MenuItem value="year" asChild>
          <Link to={"/year"}>
            <Text>年</Text>
          </Link>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}
