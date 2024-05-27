import Example from "./example"


function App() {
  
  const username = "Madaan"
  return (
    <>
    <Example/>
    <h1>My name is Anmol  {username}</h1>
    <p>Anmol</p>
    </>                              // <></> is called a fragment, we need to return only a single argument in jsx somwe can add multiple tags in fragment and return.
  )
}

export default App
