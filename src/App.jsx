/*  
    App jsx 
    Mauli Gandhi
    301486344
    2024-09-26

    Here I am adding mainrouter component
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;

