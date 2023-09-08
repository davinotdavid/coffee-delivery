import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { TextField } from "@/components/TextField";

export const StyledMain = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h2 {
    margin-block-end: 1rem;
    font-family: "Baloo 2", cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.baseSubtitle};
  }
`;

export const Card = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px;
`;

export const CardRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const StyledSectionTitle = styled(SectionTitle)`
  margin-block-end: 2rem;
`;

export const OptionalTextFieldWrapper = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    right: 0.875rem;
    top: calc(50% - 0.857rem);
    font-style: italic;
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.baseLabel};
  }
`;

export const StyledTextField = styled(TextField)`
  margin-block-end: 16px;
`;

export const CompleteYourOrderSection = styled.section`
  max-width: 40rem;
  margin-block-end: 0.75rem;
`;

export const CartSection = styled.section`
  width: 28rem;

  & > div {
    border-radius: 6px 44px;
  }
`;

export const PaymentSection = styled.section`
  max-width: 40rem;
`;

export const SubtotalTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.baseText};
  font-size: 0.875rem;
  margin-block-end: 0.875rem;
`;

export const TotalTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-size: 1.25rem;
  font-weight: 700;
  margin-block-end: 1.5rem;
`;

export const ConfirmOrderButton = styled.button`
  padding: 0.75rem;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
