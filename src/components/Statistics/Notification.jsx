import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <p style={{ textAlign: 'center' }}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
