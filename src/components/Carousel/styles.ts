import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const Container = styled.div`
  display: flex;
  max-width: 1080px;
  width: 100vw;
`;

export const Slider = styled(Carousel).attrs({
  autoPlay: true,
  showArrows: true,
  emulateTouch: false,
  swipeable: false,
  infiniteLoop: true,
  showThumbs: false,
})``;

export const Image = styled.img`
  max-height: 60rem;
  object-fit: cover;
`;
