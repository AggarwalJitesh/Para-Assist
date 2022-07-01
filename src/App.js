
import './App.css';
import Navbar from './components/Navbaar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';

function App() {

  const [theme, setTheme] = useState('light')
  // const [alert, setAlert] = useState(null)

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.body.style.backgroundColor = '#2d3339';
      // setAlert("Dark Mode enabled", "success");
    }
    else {
      setTheme('light')
      document.body.style.backgroundColor = '#f2f2f2';
      // setAlert("Light Mode enabled", "success");
    }
  }


  // const toggleAlert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type
  //   })
  // }


  return (
    <>
      <Navbar title='ServeFour.com' theme={theme} changeTheme={changeTheme} />
      {/* <Alert alert={alert}/> */}
      <div className="container">
        < TextForm heading='Enter your Dish Name Here' theme={theme} />
      </div>

    </>


  );
}

export default App;
