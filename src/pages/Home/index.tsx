import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { Header, NavProps } from "../../components/Header";
import { Carousel, PictureProps } from "../../components/Carousel";
import { MoonLoader } from "react-spinners";
import { Container, SpinnerContainer } from "./styles";
import {
  Welcome,
  PictureProps as WelcomePictureProps,
} from "../../components/Welcome";
import {
  EcoParque,
  ActivitiesProps,
  PictureProps as EcoParquePictureProps,
} from "../../components/EcoParque";
import {
  Cachaca,
  PictureProps as LiraPictureProps,
} from "../../components/Cachaca";
import {
  Hotel,
  PictureProps as HotelPictureProps,
  RoomProps,
} from "../../components/Hotel";
import { client } from "../../services/api";
import { query } from "../../services/queries/GetHomePage";
import { Footer } from "../../components/Footer";

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
        picture: LiraPictureProps;
      };
      hotel: {
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
          <EcoParque data={landingPage.data?.attributes.park} />
          <Cachaca data={landingPage.data?.attributes.lira} />
          <Hotel data={landingPage.data?.attributes.hotel} />
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
