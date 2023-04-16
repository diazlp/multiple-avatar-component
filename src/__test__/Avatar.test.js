import { render, screen, cleanup } from '@testing-library/react';
import Avatar from '../Avatar';

beforeEach(() => {
  cleanup();
});

describe('Avatar Component Testing', () => {
  it('renders default component when passed no props', () => {
    render(<Avatar />);
    const initials = screen.getByText('DL');
    const avatar = screen.getByTestId('avatar');
    expect(initials).toBeInTheDocument();
    expect(avatar).toHaveClass('w-12 h-12 text-base');
  });

  it('renders the initials of the name', () => {
    render(<Avatar name="John Doe" />);
    const initials = screen.getByText('JD');
    expect(initials).toBeInTheDocument();
  });

  it('renders the avatar name as number for hidden names count', () => {
    render(<Avatar name={10} />);
    const name = screen.getByText('+10');
    expect(name).toBeInTheDocument();
  });

  it('applies the correct class if given xs as size props', () => {
    render(<Avatar name="John Doe" size="xs" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('w-8 h-8 text-xs');
  });

  it('applies the correct class if given sm as size props', () => {
    render(<Avatar name="John Doe" size="sm" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('w-10 h-10 text-sm');
  });

  it('applies the correct class if given md as size props', () => {
    render(<Avatar name="John Doe" size="md" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('w-12 h-12 text-base');
  });

  it('applies the correct class if given lg as size props', () => {
    render(<Avatar name="John Doe" size="lg" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('w-16 h-16 text-lg');
  });

  it('matches component snapshot', () => {
    const { container } = render(<Avatar name="John Doe" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});