import { Parser } from "html-to-react";

import {
  Container,
  InfoContainer,
  Title,
  MediaContainer,
  Image,
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
  data: {
    title: string;
    description: string;
    greeting: string;
    picture: PictureProps;
  };
};

export function Cachaca({ data }: LiraProps) {
  return (
    <Container>
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
