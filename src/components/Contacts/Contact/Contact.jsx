import PropTypes from 'prop-types';
import { Content } from './Contact.styled';

const Contact = ({ name, number }) => {
  return (
    <Content>
      {name}: {number}
    </Content>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
