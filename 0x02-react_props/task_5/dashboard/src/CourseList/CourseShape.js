import PropTypes from "prop-types";

const CourseShape = PropType.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  });
}

export default courseShape;
