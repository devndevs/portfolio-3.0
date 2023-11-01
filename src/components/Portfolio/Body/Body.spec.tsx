import { render } from '@testing-library/react';

import Body from './Body';

describe('Body', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Body />);
    expect(baseElement).toBeTruthy();
  });
});
