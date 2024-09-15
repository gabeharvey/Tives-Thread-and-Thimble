import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import SignUp from './components/SignUp.jsx';
import LogIn from './components/LogIn.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import NotFound from './components/NotFound.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "transparent",
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <LogIn /> },
      { path: 'signup', element: <SignUp /> },
      {
        path: 'gallery',
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        )
      },
      {
        path: 'about',
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        )
      },
      {
        path: 'contact',
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        )
      },
      {
        path: 'privacypolicy',
        element: (
          <PrivateRoute>
            <PrivacyPolicy />
          </PrivateRoute>
        )
      },
      {
        path: 'shoppingcart',
        element: (
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        )
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </AuthProvider>
);
