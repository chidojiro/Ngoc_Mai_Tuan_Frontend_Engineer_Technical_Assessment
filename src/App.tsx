import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from './core/components';
import Router from './router/Router';

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback=''>
        <QueryClientProvider client={client}>
          <Router />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
