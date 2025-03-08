import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/toaster";
import { MainLayout } from "./layouts/MainLayout";
import { MonthView } from "./features/calendar/components/MonthView";
import { WeekView } from "./features/calendar/components/WeekView";
import { DayView } from "./features/calendar/components/DayView";
import { YearView } from "./features/calendar/components/YearView";
import { addDays, setHours, setMinutes } from "date-fns";
import { useState } from "react";

export function App() {
  const [today, setToday] = useState(new Date());
  const events = [
    {
      title: "会議",
      start: setMinutes(setHours(today, 10), 0),
      end: setMinutes(setHours(today, 11), 0),
    },
    {
      title: "ランチ",
      start: setMinutes(setHours(today, 12), 0),
      end: setMinutes(setHours(today, 13), 0),
    },
    {
      title: "打ち合わせ",
      start: setMinutes(setHours(addDays(today, 1), 14), 0),
      end: setMinutes(setHours(addDays(today, 1), 16), 0),
    },
  ];

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MainLayout />}>
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
    </>
  );
}
