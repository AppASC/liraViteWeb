import { Parser } from "html-to-react";
import { getImageUrl } from "../../utils/getImageUrl";

import {
  Container,
  InfoContainer,
  Title,
  MediaContainer,
  Image,
} from "./styles";

export type PictureProps = {
  data: {
    id: string;
    attributes: {
      url: string;
    };
  };
};

export type WelcomeProps = {
  data: {
    greeting: string;
    description: string;
    picture: PictureProps;
  };
};

export function Welcome({ data }: WelcomeProps) {
  return (
    <Container>
      <InfoContainer>
        <Title>{data?.greeting}</Title>
        {Parser().parse(data?.description)}
      </InfoContainer>
      <MediaContainer>
        <Image src={getImageUrl(data?.picture.data.attributes.url)} />
      </MediaContainer>
    </Container>
  );
}
