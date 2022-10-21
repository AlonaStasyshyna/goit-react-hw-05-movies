import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <h1>{title}</h1>

      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
