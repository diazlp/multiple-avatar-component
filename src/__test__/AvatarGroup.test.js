import { render, screen, cleanup } from '@testing-library/react';
import AvatarGroup from '../AvatarGroup';

beforeEach(() => {
  cleanup();
});

describe('AvatarGroup Component Testing', () => {
  it('renders default component when passed no props', () => {
    render(<AvatarGroup />);
    const avatarGroup = screen.getByTestId('avatar-group');
    const visibleName = screen.getByText('TB');
    const hiddenNamesCount = screen.getByText('+9');

    expect(avatarGroup).toBeInTheDocument();
    expect(visibleName).toBeInTheDocument();
    expect(hiddenNamesCount).toBeInTheDocument();
  });

  it('renders default size props when its not being passed', () => {
    render(<AvatarGroup maxLength={3} />);
    const avatarGroup = screen.getByTestId('avatar-group');
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    expect(avatarGroup).toBeInTheDocument();
    expect(avatars).toHaveLength(3);

    avatars.forEach(avatar => {
      expect(avatar).toHaveClass('w-12 h-12 text-base');
    });
  });

  it('renders default maxLength props when its not being passed', () => {
    render(<AvatarGroup size={'lg'} />);
    const avatarGroup = screen.getByTestId('avatar-group');
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    expect(avatarGroup).toBeInTheDocument();
    expect(avatars).toHaveLength(1);

    avatars.forEach(avatar => {
      expect(avatar).toHaveClass('w-16 h-16 text-lg');
    });
  });


  it('applies the correct avatar class if given xs as size props', () => {
    render(<AvatarGroup size={'xs'} />);
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    avatars.forEach(avatar => {
      expect(avatar).toHaveClass('w-8 h-8 text-xs');
    });
  });

  it('applies the correct avatar class if given sm as size props', () => {
    render(<AvatarGroup size={'sm'} />);
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    avatars.forEach(avatar => {
      expect(avatar).toHaveClass('w-10 h-10 text-sm');
    });
  });

  it('applies the correct avatar class if given md as size props', () => {
    render(<AvatarGroup size={'md'} />);
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    avatars.forEach(avatar => {
      expect(avatar).toHaveClass('w-12 h-12 text-base');
    });
  });

  it('applies the correct avatar class if given lg as size props', () => {
    render(<AvatarGroup size={'lg'} />);
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    avatars.forEach(avatar => {
      expect(avatar).toHaveClass('w-16 h-16 text-lg');
    });
  });

  it('renders 10 avatar if 10 is given as maxLength props', () => {
    render(<AvatarGroup maxLength={10} size={'lg'} />);
    const avatars = screen.getAllByTestId(/avatar-\d+/);

    expect(avatars).toHaveLength(10);
  });

  it('matches component snapshot', () => {
    const { container } = render(<AvatarGroup maxLength={9} size={'lg'} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});