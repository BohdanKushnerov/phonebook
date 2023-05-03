import PropTypes from 'prop-types';
import { Content } from './Contact.styled';

const Contact = ({ name, phone }) => {
  return (
    <Content>
      {name}: {phone}
    </Content>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
