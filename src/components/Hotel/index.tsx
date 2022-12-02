import { Parser } from "html-to-react";

import {
  Container,
  InfoContainer,
  Title,
  TopContainer,
  Image,
  BottomContainer,
  RoomContainer,
} from "./styles";

import { getImageUrl } from "../../utils/getImageUrl";
import { Carousel } from "../Carousel";

export type PictureProps = {
  data: {
    id: string;
    attributes: {
      url: string;
    };
  };
};

export type RoomProps = {
  id: string;
  title: string;
  description: string;
  wifi: boolean;
  fridge: boolean;
  breakfast: boolean;
  air: boolean;
  tv: boolean;
  restaurant: boolean;
  roomService: boolean;
  picture: {
    data: [
      {
        id: string;
        attributes: {
          url: string;
        };
      }
    ];
  };
};

export type HotelProps = {
  data: {
    title: string;
    description: string;
    greeting: string;
    picture: PictureProps;
    room: RoomProps[];
  };
};

export function Hotel({ data }: HotelProps) {
  return (
    <Container>
      <TopContainer>
        <Image src={getImageUrl(data?.picture.data.attributes.url)} />
        <InfoContainer>
          <Title>{data?.title}</Title>
          {Parser().parse(data?.description)}
        </InfoContainer>
      </TopContainer>
      <Title>{data?.greeting}</Title>
      <BottomContainer>
        {data?.room.map((room) => (
          <RoomContainer key={room.id}>
            <Title>{room.title}</Title>
            {Parser().parse(room.description)}
          </RoomContainer>
        ))}
      </BottomContainer>
    </Container>
  );
}
