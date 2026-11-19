import { useState } from 'react';
import './App.css';
import DjangoApp from './Djangoapp.jsx'; // Removed curly braces here
import ProductForm from './ProductForm.jsx';

function App() {
  return (
    <>
      <DjangoApp />
      <ProductForm />
    </>
  );
}

export default App;