import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Person from './components/Person/Person';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>MyApp</title>
        </Helmet>
      <Routes>
        <Route path="/" element={<Person/>}/>
        <Route path="/person" exact={true} element={<Person/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
   

export default App;
