import PropTypes from 'prop-types';
import Avatar from './Avatar'

const AvatarGroup = ({ maxLength, size }) => {
  //default names length -> 10
  const names = ['Tomi Budi', 'Diaz Linggaputra', 'John Doe', 'Jane Samsonite', 'Johnson Johnson', 'David Lee', 'Sarah Brown', 'Reinth Byakura', 'Shia Labouf', "Lewis Hadnott"];

  const visibleNames = names.slice(0, maxLength)
  const hiddenNamesCount = names.length - maxLength

  return (
    <div data-testid="avatar-group" className="avatar-group flex flex-nowrap items-center -space-x-6">
      {
        visibleNames.map((name, index) => (
          <Avatar key={index} name={name} size={size} dataTestId={`avatar-${index}`} />
        ))
      }
      {
        hiddenNamesCount > 0 && (
          <Avatar name={hiddenNamesCount} size={size} dataTestId="avatar-hidden-count" />
        )
      }
    </div>
  );
};

AvatarGroup.propTypes = {
  maxLength: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

AvatarGroup.defaultProps = {
  maxLength: 1,
  size: 'md',
};

export default AvatarGroup;
