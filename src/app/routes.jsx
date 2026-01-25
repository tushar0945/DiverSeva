import Landing from "../features/landing/pages/Landing";
import Login from "../features/auth/pages/Login";
import BookDriver from "../features/booking/pages/BookDriver";
import ProtectedRoute from "../routes/ProtectedRoute";
import PageWrapper from "../components/layout/PageWrapper";
import AboutUs from "../features/About/pages/AboutUs";
import Contact from "../features/Contact/pages/Contact";

export const appRoutes = [
  {
    element: <PageWrapper />, // Layout with Navbar + Footer
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <Contact />,
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
