import React from 'react'
import { getMonth } from './utils';
import { Sidebar, Month, CalendarHeader } from './components';

function App() {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;