import styled from "styled-components";
import { BiBrain } from "react-icons/bi";
import { BsLightningCharge, BsChatDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export const BrainIcon = styled(BiBrain)`
  vertical-align: middle;
`;

export const LightIcon = styled(BsLightningCharge)`
  vertical-align: middle;
`;

export const ChatIcon = styled(BsChatDots)`
  vertical-align: middle;
`;

export const AyeIcon = styled(AiOutlineEye)`
  vertical-align: middle;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  padding: 1em;
  ${(props) => {
    if (props.column)
      return `
    flex-direction: column;
    width: 25%;  
    `;
  }}
`;

export const StyledH1 = styled.h1`
  text-align: left;
`;
