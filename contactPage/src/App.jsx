
import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navbar from './components/Navigation/Navbar'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  return (
    <>
     <Navbar />
    <div className="main_container">
     <ContactHeader/>
     <ContactForm/>
    </div>
    </>
  )
}

export default App
