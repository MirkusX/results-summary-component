import "./App.css";
import { array } from "./components/array";
import {
  StyledDiv,
  StyledH1,
  StyledSection,
} from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <StyledSection>
        <StyledDiv column>
          <h1>Your Result</h1>
          <div>
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h1>Great</h1>
          <p>
            You scored higher than 65% of the people who have taken this test
          </p>
        </StyledDiv>
        <StyledDiv column>
          <StyledH1>Summary</StyledH1>
          <div>
            {array.map((item, index) => {
              return (
                <StyledDiv
                  key={index}
                  style={{ color: item.color, background: item.background }}
                >
                  <p>
                    {item.icon} {item.category}
                  </p>
                  <p>{item.score}/100</p>
                </StyledDiv>
              );
            })}
          </div>
        </StyledDiv>
      </StyledSection>
    </div>
  );
}

export default App;
