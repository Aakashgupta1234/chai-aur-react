import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <h1>my name is aakash gupta.i belong to jabalpur</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
