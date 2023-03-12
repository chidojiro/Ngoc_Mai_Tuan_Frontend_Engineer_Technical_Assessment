import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './router/Router';

const client = new QueryClient();

function App() {
  return (
    <Suspense fallback=''>
      <QueryClientProvider client={client}>
        <Router />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
