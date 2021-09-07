import "./App.css";
import { Button } from "./components/styled-comp/button/Button.styles";

function App() {
    return (
        <div className="App">
            <Button>Click Me</Button>
            <Button primary>Primary</Button>
        </div>
    );
}

export default App;
