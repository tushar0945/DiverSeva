import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext(null);

const initialState = {
  step: 1,
  pickup: null,
  drop: null,
  selectedDriver: null,
  estimatedFare: null,
  estimatedTime: null,
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_PICKUP":
      return { ...state, pickup: action.payload };

    case "SET_DROP":
      return { ...state, drop: action.payload };

    case "SET_DRIVER":
      return { ...state, selectedDriver: action.payload };

    case "SET_ESTIMATE":
      return {
        ...state,
        estimatedFare: action.payload.fare,
        estimatedTime: action.payload.time,
      };

    case "SET_STEP":
      return { ...state, step: action.payload };

    case "RESET_BOOKING":
      return initialState;

    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
