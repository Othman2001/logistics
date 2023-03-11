import { render } from '@testing-library/react';

import SaloodoAuth from './saloodo-auth';

describe('SaloodoAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SaloodoAuth />);
    expect(baseElement).toBeTruthy();
  });
});
