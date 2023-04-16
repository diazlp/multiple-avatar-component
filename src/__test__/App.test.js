import { render, screen } from '@testing-library/react';
import App from '../App';

describe('React App integration testing', () => {
  it('renders AvatarGroup component', () => {
    render(<App />);
    const avatarGroup = screen.getByTestId('avatar-group');
    expect(avatarGroup).toBeInTheDocument();
  });
});