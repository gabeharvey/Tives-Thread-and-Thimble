import { Outlet } from 'react-router-dom';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from '/src/components/Navbar.jsx';
import Footer from '/src/components/Footer.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const stripePromise = loadStripe('your-publishable-key-here'); 

function App() {
  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise}>
        <Navbar />
        <Outlet />
        <Footer />
      </Elements>
    </ApolloProvider>
  );
}

export default App;