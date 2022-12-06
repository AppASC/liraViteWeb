import { Parser } from "html-to-react";

import {
  Container,
  Image,
  InfoContainer,
  MediaContainer,
  Title,
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

export type LiraProps = {
  anchor: string;
  data: {
    title: string;
    description: string;
    greeting: string;
    picture: PictureProps;
  };
};

export function Cachaca({ anchor, data }: LiraProps) {
  return (
    <Container id={anchor}>
      <InfoContainer>
        <Title>{data?.title}</Title>
        {Parser().parse(data?.description)}
      </InfoContainer>
      <MediaContainer>
        <Image src={getImageUrl(data?.picture.data.attributes.url)} />
      </MediaContainer>
    </Container>
  );
}
