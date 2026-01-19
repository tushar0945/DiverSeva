import { AuthProvider } from "../features/auth/auth.context";
import { BookingProvider } from "../features/booking/booking.context";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BookingProvider>{children}</BookingProvider>
    </AuthProvider>
  );
};

export default Providers;
