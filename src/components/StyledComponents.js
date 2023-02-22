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
  min-height: 100vh;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1em;
  border-radius: 10px;
  ${(props) => {
    if (props.column)
      return `
    flex-direction: column;
    width: 20%;  
    padding: 1em;
    border-radius: 30px;
    `;
  }}
  ${(props) => {
    if (props.columnBlue)
      return `
    flex-direction: column;
    width: 20%;  
    background: rgb(52,45,203);
    background: linear-gradient(0deg, rgba(52,45,203,1) 0%, rgba(103,67,254,1) 100%);
    color: white;
    padding: 1em;
    border-radius: 30px;
    align-items: center;
    `;
  }}
  ${(props) => {
    if (props.circle)
      return `
    flex-direction: column;
    border-radius: 50%;
    width: 40%;
    height: auto;
    background: rgb(72,53,241);
    background: linear-gradient(0deg, rgba(72,53,241,1) 0%, rgba(76,34,201,1) 100%);
    margin: 0 auto;
    padding: 1.5em;`;
  }}
  ${(props) => {
    if (props.listContainer)
      return `
    gap: 1em;
    flex-direction: column;
    padding: 0;`;
  }}
`;

export const StyledH1 = styled.h1`
  text-align: left;
  ${(props) => {
    if (props.circleH1)
      return `
    font-size: 5rem;
    margin: 0;
    text-align: center;`;
  }}
  ${(props) => {
    if (props.gray)
      return `
    color: #B8A8F7;
    text-align: center;`;
  }}
`;

export const StyledP = styled.p`
  margin: 0;
  ${(props) => {
    if (props.smallWidth)
      return `
    width: 70%;
    margin-bottom: 1.5em;
    `;
  }}
`;

export const StyledButton = styled.button`
  background-color: #553af7;
  border: none;
  border-radius: 30px;
  padding: 1em;
  margin: 1.5em;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`;
