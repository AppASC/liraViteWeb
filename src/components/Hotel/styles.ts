import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";

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
  justify-content: space-evenly;
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
  /* background-color: ${({ theme }) => theme.colors.shape}; */
  border-radius: 1rem;
  display: flex;

  ${({ theme }) => css`
    @media ${theme.device.tablet} {
      flex-direction: column;
    }
  `}
`;

export const InfoRoomContainer = styled.div`
  margin-left: 2rem;
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
`;

export const Slider = styled(Carousel).attrs({
  autoPlay: true,
  showArrows: true,
  emulateTouch: false,
  swipeable: false,
  infiniteLoop: true,
  showThumbs: false,
})``;
