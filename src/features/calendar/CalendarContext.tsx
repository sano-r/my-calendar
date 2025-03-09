import React, { useContext } from "react";
import {
  addDays,
  addMonths,
  addWeeks,
  format,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from "date-fns";
import { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  CalendarAction,
  CalendarContextType,
  CalendarState,
} from "../calendar/CalendarContext";

const initState = {
  currentDate: new Date()
};

const reducer = (state: CalendarState, action: CalendarAction) => {
  switch (action.type) {
    case "TODAY":
      return { ...state, currentDate: new Date() };
    case "NEXT_MONTH":
      return { ...state, currentDate: addMonths(state.currentDate, 1) };
    case "PREV_MONTH":
      return { ...state, currentDate: subMonths(state.currentDate, 1) };
    case "NEXT_WEEK":
      return { ...state, currentDate: addDays(state.currentDate, 1) };
    case "PREV_WEEK":
      return { ...state, currentDate: subDays(state.currentDate, 1) };
  }
};

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

export function CalendarProvider({ children }: {children:React.ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initState);
  //   const navigate = useNavigate();
  const location = useLocation();

  const handleNext = () => {
    if (location.pathname === "/month") {
      dispatch({ type: "NEXT_MONTH" });
    } else if (location.pathname === "/week") {
      dispatch({ type: "NEXT_WEEK" });
    }
  };
  const handlePrev = () => {
    if (location.pathname === "/month") {
      dispatch({ type: "PREV_MONTH" });
    } else if (location.pathname === "/week") {
      dispatch({ type: "PREV_WEEK" });
    }
  };

  const value: CalendarContextType = {
    state,
    dispatch,
    handleNext,
    handlePrev,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return context;
};
