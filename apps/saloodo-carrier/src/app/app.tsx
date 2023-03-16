import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import {
  UiKit
} from "@uiKit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LoginForm } from "@saloodoAuth"

const queryClient = new QueryClient()
const StyledApp = styled.div`


  // Your style here
`;

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UiKit>
        <StyledApp>
          <Navbar />
        </StyledApp>
      </UiKit>

    </QueryClientProvider>

  );
}

export default App;
