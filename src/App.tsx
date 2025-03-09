import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/toaster";
import { Calendar } from "./features/calendar/Calendar";
import { MonthView } from "./features/calendar/components/MonthView";
import { WeekView } from "./features/calendar/components/WeekView";
import { DayView } from "./features/calendar/components/DayView";
import { YearView } from "./features/calendar/components/YearView";
import { addDays, setHours, setMinutes } from "date-fns";
import { CalendarProvider } from "./features/calendar/CalendarContext.tsx";

export function App() {
  const events = [
    {
      title: "会議",
      start: setMinutes(setHours(new Date(2025, 3,10,0,0,0,0), 10), 0),
      end: setMinutes(setHours(new Date(2025, 3,10,0,0,0,0), 11), 0),
    },
    {
      title: "ランチ",
      start: setMinutes(setHours(new Date(2025, 3,11,0,0,0,0), 12), 0),
      end: setMinutes(setHours(new Date(2025, 3,11,0,0,0,0), 13), 0),
    },
    {
      title: "打ち合わせ",
      start: setMinutes(setHours(addDays(new Date(2025, 3,13,0,0,0,0), 1), 14), 0),
      end: setMinutes(setHours(addDays(new Date(2025, 3,13,0,0,0,0), 1), 16), 0),
    },
  ];

  return (
    <CalendarProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Calendar />}>
            <Route
              index
              element={<WeekView date={new Date()} events={events} />}
            />
            <Route path="day" element={<DayView />} />
            <Route
              path="week"
              element={<WeekView date={new Date()} events={events} />}
            />
            <Route path="month" element={<MonthView />} />
            <Route path="year" element={<YearView />} />
          </Route>
        </Routes>
    </CalendarProvider>
  );
}
