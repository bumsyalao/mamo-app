import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/style.scss';
import { Dashboard } from './screens/Dashboard';
import { FormWrapper } from './components/Forms/FormWrapper';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="create-invoice" element={<FormWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

