import React from 'react';
import PropTypes from 'prop-types';

const rowBackgroundColor = '#f5f5f5ab';
const headerRowBackgroundColor = 'deb5b545';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
  const rowStyle = {
    backgroundColor: isHeader ? headerRowBackgroundColor : rowBackgroundColor,
  }
  return (
    <tr style={ rowStyle }>
        isHeader ? (
          textSecondCell === null ? (
            <th colSpan={2}>{ textFirstCell }</th>)
            :
            (
              <>
                <th>{ textFirstCell }</th>
                <th>{ textSecondCell }</th>
              </>
            )
          )
        :
        (
          <>
            <td>{ textFirstCell }</td>
            <td>{ textSecondCell }</td>
          </>
        )
      }
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
