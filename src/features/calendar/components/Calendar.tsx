import { useState } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
} from "date-fns";
import { ja } from "date-fns/locale";

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startOfMonthDate = startOfMonth(currentMonth);
  const endOfMonthDate = endOfMonth(currentMonth);
  const startOfWeekDate = startOfWeek(startOfMonthDate);
  const endOfWeekDate = endOfWeek(endOfMonthDate);

  const days: Date[] = [];
  let currentDate = startOfWeekDate;

  while (currentDate <= endOfWeekDate) {
    days.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  const handlePrevMonth = () => {
    setCurrentMonth(addDays(currentMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addDays(currentMonth, 1));
  };

  return (
    <Box backgroundColor={"white"} h={"100%"} rounded={"lg"} shadow={"lg"}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          {format(currentMonth, "yyyy年MM月", { locale: ja })}
        </Text>
        <Box>
          <button onClick={handlePrevMonth}>前月</button>
          <button onClick={handleNextMonth}>翌月</button>
        </Box>
      </Box>
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
          <GridItem key={day} textAlign="center" fontWeight="bold">
            {day}
          </GridItem>
        ))}
        {days.map((day) => (
          <GridItem
            key={day.toISOString()}
            textAlign="center"
            p={2}
            bg={isSameDay(day, new Date()) ? "blue.100" : "transparent"}
            color={isSameMonth(day, currentMonth) ? "black" : "gray.400"}
          >
            {format(day, "d")}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
