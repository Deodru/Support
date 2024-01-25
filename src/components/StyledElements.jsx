import styled from "styled-components";

export const Container = styled.div`
  background-color: "#fff";
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$center ? "center" : "flex-start")};
  justify-content: center;
`;

export const OuterWrapper = styled.div`
  margin-inline: auto;
  margin-block: 6.25rem;
  position: relative;
  width: 80%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 767px) {
    width: 95%;
    align-items: center;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 3.125rem;
  padding-top: 5rem;
  width: ${(props) => (props.$isfull ? "100%" : "70% ")};

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;
