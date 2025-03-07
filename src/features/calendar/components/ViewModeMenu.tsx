import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

interface Props{
    viewMode: 'day' | 'week' | 'month' | 'year';
    handleViewMode: (mode: 'day' | 'week' | 'month' | 'year') => void;
}

export function ViewModeMenu({viewMode, handleViewMode}: Props) {
    return(
        <MenuRoot onSelect={e => handleViewMode(e.value as 'day' |'week' | 'month' | 'year')}>
          <MenuTrigger asChild>
            <Button rounded={"full"} size={"lg"} variant={"surface"}>
              {viewMode === 'day' ? '日' : viewMode === 'week' ? '週' : viewMode === 'month' ? '月' : '年'} <FiChevronDown />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="day">
              日
            </MenuItem>
            <MenuItem value="week">
              週
            </MenuItem>
            <MenuItem value="month">
              月
            </MenuItem>
            <MenuItem value="year">
              年
            </MenuItem>
          </MenuContent>
        </MenuRoot>
    )
}