import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/toaster";
import { MainLayout } from "./layouts/MainLayout";
import { MonthView } from "./features/calendar/components/MonthView";
import { WeekView } from "./features/calendar/components/WeekView";
import { DayView } from "./features/calendar/components/DayView";
import { YearView } from "./features/calendar/components/YearView";

export function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WeekView />} />
          <Route path="day" element={<DayView />} />
          <Route path="week" element={<WeekView />} />
          <Route path="month" element={<MonthView />} />
          <Route path="year" element={<YearView />} />
        </Route>
      </Routes>
    </>
  );
}
