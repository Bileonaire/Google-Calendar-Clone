import React, { useState, useContext, useEffect } from "react";
import { getMonth } from './utils';
import { Sidebar, Month, CalendarHeader } from './components';
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;