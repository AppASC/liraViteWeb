import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Image, Slider } from "./styles";

import { getImageUrl } from "../../utils/getImageUrl";

export type PictureProps = {
  picture: {
    data: {
      id: string;
      attributes: {
        url: string;
      };
    };
  };
};

export type CarouselProps = {
  data: PictureProps[];
};
export function Carousel({ data }: CarouselProps) {
  return (
    <Container>
      <Slider>
        {data?.map((image) => (
          <Image
            key={image.picture.data?.id}
            src={getImageUrl(image.picture.data?.attributes.url)}
            alt="Image do Parque"
          />
        ))}
      </Slider>
    </Container>
  );
}
