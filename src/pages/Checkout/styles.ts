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
    font-size: 0.75rem;
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

  div {
    border-radius: 6px 44px;
  }
`;

export const PaymentSection = styled.section`
  max-width: 40rem;
`;
