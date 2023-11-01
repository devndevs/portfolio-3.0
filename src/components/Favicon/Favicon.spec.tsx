import { render } from '@testing-library/react';

import Favicon from './Favicon';

describe('Favicon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Favicon />);
    expect(baseElement).toBeTruthy();
  });
});
