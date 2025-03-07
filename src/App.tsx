import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/toaster";
import { Calendar } from "./features/calendar/components/Calendar";
import { MainLayout } from "./layouts/MainLayout";

export function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Calendar />} />
        </Route>
      </Routes>
    </>
  );
}
