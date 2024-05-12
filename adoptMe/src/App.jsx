import './App.css'
import Pet from './Pet'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './Logo';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchParam from "./SearchParam";
import Details from './Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },

});


function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Logo />
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParam />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
