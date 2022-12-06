import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { useTheme } from "styled-components";
import {
  Cachaca,
  PictureProps as LiraPictureProps,
} from "../../components/Cachaca";
import { Carousel, PictureProps } from "../../components/Carousel";
import {
  ActivitiesProps,
  EcoParque,
  PictureProps as EcoParquePictureProps,
} from "../../components/EcoParque";
import { Footer } from "../../components/Footer";
import { Header, NavProps } from "../../components/Header";
import {
  Hotel,
  PictureProps as HotelPictureProps,
  RoomProps,
} from "../../components/Hotel";
import {
  PictureProps as WelcomePictureProps,
  Welcome,
} from "../../components/Welcome";
import { client } from "../../services/api";
import { query } from "../../services/queries/GetHomePage";
import { Container, SpinnerContainer } from "./styles";

type LandinPageProps = {
  data: {
    attributes: {
      header: {
        company: string;
        navigator: NavProps[];
        button: {
          hasButton: boolean;
          label: string;
          path: string;
        };
      };
      carousel: PictureProps[];
      welcome: {
        greeting: string;
        description: string;
        picture: WelcomePictureProps;
      };
      park: {
        anchor: string;
        greeting: string;
        title: string;
        description: string;
        picture: EcoParquePictureProps;
        activities: ActivitiesProps[];
      };
      lira: {
        greeting: string;
        title: string;
        description: string;
        anchor: string;
        picture: LiraPictureProps;
      };
      hotel: {
        anchor: string;
        greeting: string;
        title: string;
        description: string;
        picture: HotelPictureProps;
        room: RoomProps[];
      };
    };
  };
};

export function Home() {
  const [loading, setLoading] = useState(false);
  const [landingPage, setLandingPage] = useState<LandinPageProps>(
    {} as LandinPageProps
  );
  const theme = useTheme();
  useEffect(() => {
    async function getHomeData() {
      setLoading(true);
      const { landingPage } = await client.request(query);
      setLandingPage(landingPage);
      setLoading(false);
    }
    getHomeData();
  }, []);
  if (!loading) {
    return (
      <>
        <Header data={landingPage.data?.attributes.header} />
        <Container>
          <Carousel data={landingPage.data?.attributes.carousel} />
          <Welcome data={landingPage.data?.attributes.welcome} />
          <EcoParque
            anchor={landingPage.data?.attributes.park.anchor}
            data={landingPage.data?.attributes.park}
          />
          <Cachaca
            anchor={landingPage.data?.attributes.lira.anchor}
            data={landingPage.data?.attributes.lira}
          />
          <Hotel
            anchor={landingPage.data?.attributes.hotel.anchor}
            data={landingPage.data?.attributes.hotel}
          />
          <Footer />
        </Container>
      </>
    );
  } else {
    return (
      <SpinnerContainer>
        <MoonLoader color={theme.colors.heading} size={80} />
      </SpinnerContainer>
    );
  }
}
