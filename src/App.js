import "./App.css";
import { array } from "./components/array";

function App() {
  return (
    <div className="App">
      <section>
        <div>
          <h1>Your Result</h1>
          <div>
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h1>Great</h1>
          <p>
            You scored higher than 65% of the people who have taken this test
          </p>
        </div>
        <div>
          <h1>Summary</h1>
          <div>
            {array.map((item, index) => {
              return (
                <div>
                  <p>
                    {item.icon}
                    {item.category}
                  </p>
                  <p>{item.score}/100</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
