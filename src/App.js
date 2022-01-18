import React, { useState, useContext, useEffect } from "react";
import { getMonth } from './utils';
import { Sidebar, Month, CalendarHeader } from './components';

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());


  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={getMonth(1)}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;