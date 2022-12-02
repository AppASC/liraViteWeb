import { Parser } from "html-to-react";

import {
  Container,
  InfoContainer,
  Title,
  TopContainer,
  Image,
  BottomContainer,
  RoomContainer,
  Slider,
  InfoRoomContainer,
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
  left: boolean;
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
        {data?.room.map((room) => {
          if (room.left) {
            return (
              <RoomContainer key={room.id}>
                <Slider>
                  {room.picture.data?.map((image) => (
                    <Image
                      key={image.id}
                      src={getImageUrl(image.attributes.url)}
                      alt="Image do Parque"
                    />
                  ))}
                </Slider>
                <InfoRoomContainer>
                  <Title>{room.title}</Title>
                  {Parser().parse(room.description)}
                </InfoRoomContainer>
              </RoomContainer>
            );
          } else {
            return (
              <RoomContainer key={room.id}>
                <InfoRoomContainer>
                  <Title>{room.title}</Title>
                  {Parser().parse(room.description)}
                </InfoRoomContainer>
                <Slider>
                  {room.picture.data?.map((image) => (
                    <Image
                      key={image.id}
                      src={getImageUrl(image.attributes.url)}
                      alt="Image do Parque"
                    />
                  ))}
                </Slider>
              </RoomContainer>
            );
          }
        })}
      </BottomContainer>
    </Container>
  );
}
