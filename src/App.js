import styled from "styled-components";
import Background from "./components/Background";
const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

function App() {
  return <AppWrapper>
    <Background/>
  </AppWrapper>
}

export default App;
