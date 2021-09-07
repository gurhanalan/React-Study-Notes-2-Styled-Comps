import "./App.css";
import StyledComponents from "./components/styled-comp";
import { Button } from "./components/styled-comp/button/Button.styles";

function App() {
    return (
        <div className="App">
            <Button>Click Me</Button>
            <Button primary>Primary</Button>
            <StyledComponents />
        </div>
    );
}

export default App;
