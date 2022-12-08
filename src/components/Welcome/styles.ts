import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem;
  align-items: center;

  ${({ theme }) => css`
    @media ${theme.device.mobileL} {
      flex-direction: column;
    }
  `}
`;
export const InfoContainer = styled.div`
  p {
    ${({ theme }) => css`
      font-family: ${theme.fonts.primary};
      font-size: ${theme.fontSize.small};
      color: ${theme.colors.black};
      text-align: justify;
    `}
    margin-top:1rem;
    margin-right: 1rem;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.black};
  `}
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  height: 30rem;
  width: 100%;
  border-radius: 1rem;
  object-fit: contain;
`;
