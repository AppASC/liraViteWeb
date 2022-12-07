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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  align-items: center;
  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      flex-direction: column;
    }
  `}
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
    font-weight: bold;
    color: ${theme.colors.black};
    text-align: justify;
  `}
  margin-top:1rem;
`;

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  transition: transform 1s;
  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      margin-bottom: 2rem;
      transform: scale(0.9);
      align-self: center;
    }
  `}
`;

export const Image = styled.img`
  height: 30rem;
  width: 40rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundItems};
  border-radius: 1rem;
  transition: transform 1s;
  ${({ theme }) => css`
    :hover {
      transform: scale(1.05);
    }
  `}
`;

export const ImageActivity = styled.img`
  height: 20rem;
  width: 20rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: cover;
`;
