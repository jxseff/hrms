
import './App.css'
import { useAuthenticator } from '@aws-amplify/ui-react';


function App() {
  const { signOut } = useAuthenticator();

  return (
    <>
      <div>
        <h1>
          HR Management
        </h1>
      </div>

      <button onClick={signOut}>Sign out</button>
      
    </>
  )
}

export default App
