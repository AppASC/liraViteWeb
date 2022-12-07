import { Carousel } from "react-responsive-carousel";
import styled, { css } from "styled-components";

type Props = {
  left?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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

  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      flex-direction: column;
    }
  `}
`;
export const InfoContainer = styled.div`
  padding: 4rem;
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
    color: ${theme.colors.shape};
    text-align: justify;
  `}
  margin-top:1rem;
`;

export const Image = styled.img`
  height: 30rem;
  border-radius: 1rem;
  object-fit: cover;
  transition: transform 1s;

  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      margin-top: 2rem;
      transform: scale(0.8);
    }
  `}
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      flex-direction: column;
    }
  `}
`;

export const RoomContainer = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundItems};
  border-radius: 1rem;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      flex-direction: column;
    }
  `}
`;

export const TitleRoom = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.shape};
  `}
  margin-bottom: 1rem;
`;

export const InfoRoomContainer = styled.div<Props>`
  margin: 2rem;
  min-width: 50%;
  p {
    ${({ theme }) => css`
      font-family: ${theme.fonts.primary};
      font-size: ${theme.fontSize.small};
      color: ${theme.colors.shape};
      text-align: justify;
    `}
    margin-top:1rem;
  }
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Slider = styled(Carousel).attrs({
  autoPlay: true,
  showArrows: true,
  emulateTouch: false,
  swipeable: false,
  infiniteLoop: true,
  showThumbs: false,
})``;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 5.6rem;
  width: 20rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  :hover {
    filter: brightness(0.7);
  }
`;
