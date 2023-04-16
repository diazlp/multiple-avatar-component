import PropTypes from 'prop-types';
import getSizeClass from './utils/getSizeClass';

const Avatar = ({ name, size, dataTestId }) => {
  const initials = isNaN(+name) && name.split(' ').map(part => part[0]).join('').toUpperCase();

  return (
    <div data-testid={dataTestId || `avatar`} className={`avatar bg-gray-500 ${getSizeClass(size)} flex items-center justify-center`}>
      <span className="text-white font-bold">{initials || `+${name}`}</span>
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  dataTestId: PropTypes.any
};

Avatar.defaultProps = {
  name: 'Diaz Linggaputra',
  size: 'md',
};

export default Avatar;