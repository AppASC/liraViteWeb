import { Parser } from "html-to-react";
import { getImageUrl } from "../../utils/getImageUrl";
import {
  Container,
  InfoContainer,
  Title,
  Text,
  MediaContainer,
  Image,
  MainContainer,
  ActivitiesContainer,
  ActivityContainer,
  ImageActivity,
} from "./styles";

export type PictureProps = {
  data: {
    id: string;
    attributes: {
      url: string;
    };
  };
};

export type ActivitiesProps = {
  title: string;
  picture: PictureProps;
};

export type EcoParqueProps = {
  data: {
    title: string;
    description: string;
    greeting: string;
    picture: PictureProps;
    activities: ActivitiesProps[];
  };
};

export function EcoParque({ data }: EcoParqueProps) {
  return (
    <Container>
      <MainContainer>
        <MediaContainer>
          <Image src={getImageUrl(data?.picture.data.attributes.url)} />
        </MediaContainer>
        <InfoContainer>
          <Title>{data?.title}</Title>
          {Parser().parse(data?.description)}
        </InfoContainer>
      </MainContainer>
      <Title>{data?.greeting}</Title>
      <ActivitiesContainer>
        {data?.activities.map((activity) => (
          <ActivityContainer key={activity.picture.data.id}>
            <ImageActivity
              src={getImageUrl(activity.picture.data.attributes.url)}
            />
            <Text>{activity.title}</Text>
          </ActivityContainer>
        ))}
      </ActivitiesContainer>
    </Container>
  );
}
