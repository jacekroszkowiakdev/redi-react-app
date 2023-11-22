import { useState } from "react";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>{<Header title="My React App" />}</div>
            <h1>Created with vite!</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <Footer companyName="Jacek Roszkowiak" year={2023} />
        </>
    );
}

export default App;
