import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => css`
    @media ${theme.device.mobileL} {
      padding: 1rem 0;
      justify-content: space-evenly;
    }
  `}
`;

export const NetworkContainer = styled.div`
  margin: 1rem 0;
  max-width: 40rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => css`
    @media ${theme.device.mobileL} {
      flex-wrap: wrap;
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${theme.colors.black};
  `}
  margin-bottom:1rem;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSize.small};

    color: ${theme.colors.black};
    text-align: justify;
  `}
  margin-top:1rem;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${theme.colors.shape};
    text-decoration: none;
    margin-left: 2rem;
    cursor: pointer;
  `}
`;
