import React, {useState, useEffect} from 'react';

export default function Alert() {
  const [showAlert, setShowAlert] = useState(true);
  return (
    showAlert && (
    <div className='alert'>Alert</div>
    )
  );
}