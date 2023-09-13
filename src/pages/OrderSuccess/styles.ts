import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme.colors.primaryDark};
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 2.5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const GradientBorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background: ${(props) => props.theme.colors.white};
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 6px 45px;
  padding: 2.5rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(#dbac2c, #8047f8);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.colors.baseText};

  p {
    margin: 0;
  }
`;
