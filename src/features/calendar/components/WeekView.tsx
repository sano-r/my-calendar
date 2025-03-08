import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  startOfWeek,
  addDays,
  format,
  setHours,
  setMinutes,
  isWithinInterval,
  differenceInMinutes,
} from "date-fns";
import { ja } from "date-fns/locale";

interface Event {
  title: string;
  start: Date;
  end: Date;
}

interface WeekViewProps {
  date: Date;
  events: Event[];
}

export function WeekView({ date, events }: WeekViewProps) {
  const startOfCurrentWeek = startOfWeek(date, { weekStartsOn: 1 });
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfCurrentWeek, i)
  ); // 週の各日の配列

  return (
    <Box
      backgroundColor={"white"}
      h={"100%"}
      rounded={"lg"}
      shadow={"lg"}
      overflow={"auto"}
    >
      <Box>
        <Grid templateColumns="repeat(8, 1fr)" gap={0} border="1px solid #ddd">
          {/* 時間軸の表示 */}
          <GridItem rowSpan={25} borderRight="1px solid #ddd">
            {hours.map((hour) => (
              <Box
                key={hour}
                height="60px"
                borderBottom="1px solid #eee"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm">{`${hour}:00`}</Text>
              </Box>
            ))}
          </GridItem>

          {/* 曜日表示 */}
          {days.map((day) => (
            <GridItem
              key={day.getDate()}
              textAlign="center"
              borderBottom="1px solid #ddd"
            >
              <Text>{format(day, "MM/dd(EEE)", { locale: ja })}</Text>
            </GridItem>
          ))}

          {/* 各日の時間帯の表示 */}
          {days.map((day) =>
            hours.map((hour) => {
              const timeSlotStart = setMinutes(setHours(day, hour), 0);
              const timeSlotEnd = setMinutes(setHours(day, hour), 59);

              const eventsInSlot = events.filter((event) =>
                isWithinInterval(event.start, {
                  start: timeSlotStart,
                  end: timeSlotEnd,
                })
              );

              return (
                <GridItem
                  key={`${day}-${hour}`}
                  height="60px"
                  borderBottom="1px solid #eee"
                  borderLeft="1px solid #eee"
                  position="relative"
                >
                  {eventsInSlot.map((event) => {
                    const eventStartInMinutes = differenceInMinutes(
                      event.start,
                      timeSlotStart
                    );
                    const eventDurationInMinutes = differenceInMinutes(
                      event.end,
                      event.start
                    );
                    const top = (eventStartInMinutes / 60) * 100;
                    const height = (eventDurationInMinutes / 60) * 100;

                    return (
                      <Box
                        key={event.title}
                        bg="blue.100"
                        p={1}
                        m={1}
                        borderRadius="sm"
                        position="absolute"
                        top={`${top}%`}
                        height={`${height}%`}
                        width="90%"
                      >
                        <Text fontSize="xs">{event.title}</Text>
                      </Box>
                    );
                  })}
                </GridItem>
              );
            })
          )}
        </Grid>
      </Box>
    </Box>
  );
}
