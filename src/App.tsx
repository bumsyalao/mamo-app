import React from 'react';
import './scss/style.scss';
import { SplitScreen } from './layout/SplitScreen';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

const App = () => {
  return (
    <div>
      <SplitScreen left={() => <Sidebar />} right={() => <Navbar />} />
    </div>
  );
}

export default App;

