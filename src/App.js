import "./App.css";
import { array } from "./components/array";
import {
  StyledDiv,
  StyledH1,
  StyledP,
  StyledSection,
} from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <StyledSection>
        <StyledDiv columnBlue>
          <h1>Your Result</h1>
          <StyledDiv circle>
            <StyledH1 circleH1>76</StyledH1>
            <StyledP>of 100</StyledP>
          </StyledDiv>
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
