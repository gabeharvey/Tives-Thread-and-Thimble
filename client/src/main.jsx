import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import SignUp from './components/SignUp.jsx';
import LogIn from './components/LogIn.jsx'; 
import Contact from './components/Contact.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#F6CBD4",
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'gallery', 
        element: <Gallery />
      },
      {
        path: 'signup', 
        element: <SignUp />
      },
      {
        path: 'login', 
        element: <LogIn />
      },
      {
        path: 'contact', 
        element: <Contact />
      },
      {
        path: 'privacypolicy', 
        element: <PrivacyPolicy />
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

