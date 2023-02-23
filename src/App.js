import "./App.css";
import { array } from "./components/array";
import {
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledP,
  StyledSection,
  WhiteDiv,
} from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <StyledSection>
        <StyledDiv white>
          <StyledDiv columnBlue>
            <StyledH1 gray>Your Result</StyledH1>
            <StyledDiv circle>
              <StyledH1 circleH1>76</StyledH1>
              <StyledP>of 100</StyledP>
            </StyledDiv>
            <h1>Great</h1>
            <StyledP smallWidth>
              You scored higher than 65% of the people who have taken this test
            </StyledP>
          </StyledDiv>
          <StyledDiv column>
            <StyledH1>Summary</StyledH1>
            <StyledDiv listContainer>
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
            </StyledDiv>
            <StyledButton>Continue</StyledButton>
          </StyledDiv>
        </StyledDiv>
      </StyledSection>
    </div>
  );
}

export default App;
