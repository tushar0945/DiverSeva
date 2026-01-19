import Landing from "../features/landing/pages/Landing";
import Login from "../features/auth/pages/Login";
import ProtectedRoute from "../routes/ProtectedRoute";
import PageWrapper from "../components/layout/PageWrapper";

export const appRoutes = [
  {
    element: <PageWrapper />, // 👈 Layout route
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/book",
        element: (
          <ProtectedRoute>
            <div>Booking Flow Placeholder</div>
          </ProtectedRoute>
        ),
      },
    ],
  },

  // ❌ No navbar here
  {
    path: "/login",
    element: <Login />,
  },
];
