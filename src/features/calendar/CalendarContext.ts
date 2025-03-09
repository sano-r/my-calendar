import { Dispatch } from "react";

// State の型定義
export interface CalendarState {
  currentDate: Date;
//   viewMode: 'day' | 'week' | 'month' | 'year';
}

// Action の型定義
export type CalendarAction =
  | { type: "TODAY" }
  | { type: "NEXT_MONTH" }
  | { type: "PREV_MONTH" }
  | { type: "NEXT_WEEK" }
  | { type: "PREV_WEEK" };

// Context の型定義
export interface CalendarContextType {
  state: CalendarState;
  dispatch: Dispatch<CalendarAction>;
  handleNext: () => void;
  handlePrev: () => void;
}
