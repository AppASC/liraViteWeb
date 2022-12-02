import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.heading};
  padding: 4rem;
  align-items: center;

  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      flex-direction: column;
    }
  `}
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
  align-items: center;
`;
export const InfoContainer = styled.div`
  p {
    ${({ theme }) => css`
      font-family: ${theme.fonts.primary};
      font-size: ${theme.fontSize.small};
      color: ${theme.colors.shape};
      text-align: justify;
    `}
    margin-top:1rem;
  }
  margin-left: 2rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.shape};
  `}
  margin-bottom: 1rem;
`;
export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.shape};
    text-align: justify;
  `}
  margin-top:1rem;
`;

export const Image = styled.img`
  height: 30rem;
  border-radius: 1rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const RoomContainer = styled.div`
  p {
    ${({ theme }) => css`
      font-family: ${theme.fonts.primary};
      font-size: ${theme.fontSize.small};
      color: ${theme.colors.black};
      text-align: justify;
    `}
    margin-top:1rem;
  }
  width: 40%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
`;
