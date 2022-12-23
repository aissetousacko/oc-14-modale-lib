import React, { useState } from 'react'
import Modal from '../lib/components/Modal';

function App() {
  const [open, isOpen] = useState(false)
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => isOpen(!open)}>Open Modal</button>
      <Modal open={open} isOpen={isOpen} message="Modal open !" />
    </div>
  );
}

export default App;
