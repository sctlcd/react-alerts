import React, {useState, useEffect} from 'react';

export default function Alert({type}) {
  const [showAlert, setShowAlert] = useState(true);
  return (
    showAlert && (
    <div className={`alert alert-${type}`}><div>{type} alert</div></div>
    )
  );
}