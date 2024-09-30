import React, {useState, useEffect} from 'react';
// import Alert from './Alert';

export default function Alert({type, message}) {
  const [showAlert, setShowAlert] = useState(true);
  return (
    showAlert && (
    <div className={`alert alert-${type}`}>
      <div>
        {type} alert
        <div className='alert-close'>
          <span className='mr-1'>{message}</span>
        </div>
      </div>
    </div>
    )
  );
}