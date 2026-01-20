import Landing from "../features/landing/pages/Landing";
import Login from "../features/auth/pages/Login";
import BookDriver from "../features/booking/pages/BookDriver";
import ProtectedRoute from "../routes/ProtectedRoute";
import PageWrapper from "../components/layout/PageWrapper";

export const appRoutes = [
  {
    element: <PageWrapper />, // Layout with Navbar + Footer
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/book",
        element: (
          <ProtectedRoute>
            <BookDriver />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Auth pages (no navbar/footer)
  {
    path: "/login",
    element: <Login />,
  },
];
