import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SaloodoAuthProps {}

const StyledSaloodoAuth = styled.div`
  color: pink;
`;

export function SaloodoAuth(props: SaloodoAuthProps) {
  return (
    <StyledSaloodoAuth>
      <h1>Welcome to SaloodoAuth!</h1>

      <ul>
        <li>
          <Link to="/">saloodo-auth root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the saloodo-auth root route.</div>}
      />
    </StyledSaloodoAuth>
  );
}

export default SaloodoAuth;
