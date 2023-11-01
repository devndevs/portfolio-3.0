import { render } from '@testing-library/react';

import ContactButton from './ContactButton';

describe('ContactButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactButton />);
    expect(baseElement).toBeTruthy();
  });
});
