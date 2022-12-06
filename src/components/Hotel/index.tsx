import { Parser } from "html-to-react";

import {
  BottomContainer,
  Container,
  Image,
  InfoContainer,
  InfoRoomContainer,
  Link,
  RoomContainer,
  Slider,
  Title,
  TitleRoom,
  TopContainer,
} from "./styles";

import { getImageUrl } from "../../utils/getImageUrl";

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
  anchor: string;
  data: {
    title: string;
    description: string;
    greeting: string;
    picture: PictureProps;
    room: RoomProps[];
  };
};

export function Hotel({ anchor, data }: HotelProps) {
  return (
    <Container id={anchor}>
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
                  <TitleRoom>{room.title}</TitleRoom>
                  {Parser().parse(room.description)}
                  <Link
                    href="https://reservas.desbravador.com.br/hotel-app/lira-pousada-de-charme"
                    target="_blank"
                  >
                    Reservar
                  </Link>
                </InfoRoomContainer>
              </RoomContainer>
            );
          } else {
            return (
              <RoomContainer key={room.id}>
                <InfoRoomContainer left={room.left}>
                  <TitleRoom>{room.title}</TitleRoom>
                  {Parser().parse(room.description)}
                  <Link
                    href="https://reservas.desbravador.com.br/hotel-app/lira-pousada-de-charme"
                    target="_blank"
                  >
                    Reservar
                  </Link>
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
