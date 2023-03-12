import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from './core/components';
import Router from './router/Router';

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={client}>
        <Router />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
