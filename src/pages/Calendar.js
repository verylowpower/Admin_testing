import React from 'react';
import Button from 'react-bootstrap/Button';

const Calendar = () => {
  return (
    <div>
      <Button variant="primary">Thêm</Button>{' '}
      <Button variant="primary">Sửa</Button>{' '}
      <Button variant="primary">Xóa</Button>{' '}
    </div>
  );
};

export default Calendar;
