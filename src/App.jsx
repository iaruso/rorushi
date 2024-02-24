import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

/* Components */
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx';
/* Pages */
import Home from './pages/Home/Home.jsx'
import Menu from './pages/Menu/Menu.jsx'
import Services from './pages/Services/Services.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
/* Routes */
const router = [
  { path: '/', element: <Home/> },
  { path: '/menu', element: <Menu/> },
  { path: '/services', element: <Services/>},
  { path: '/contacts', element: <Contacts/> },
	{ path: '*', element: <Home/> },
];

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <div className='app'>
          <Routes>
          {router.map(({path, element}) => (
            <Route key={path} exact path={path} element={element} />
          ))}
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  )
}

export default App