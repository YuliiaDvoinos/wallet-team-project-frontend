import PropTypes from 'prop-types';
// Стили лежат в styles/_container.scss

export default function Section({ children }) {
  return <div className="container">{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
