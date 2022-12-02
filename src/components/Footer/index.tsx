import { useTheme } from "styled-components";
import { Container, Link, NetworkContainer, Text, Title } from "./styles";
import {
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo,
  WhatsappLogo,
} from "phosphor-react";

export function Footer() {
  const theme = useTheme();
  return (
    <Container>
      <Title>Siga-no nas redes sociais</Title>
      <NetworkContainer>
        <Link href="https://www.instagram.com/liraecoparque/">
          <InstagramLogo
            size={theme.fontSize.large}
            color={theme.colors.black}
          />
        </Link>
        <Link href="https://www.facebook.com/liraecoparque/">
          <FacebookLogo
            size={theme.fontSize.large}
            color={theme.colors.black}
          />
        </Link>
        <Link>
          <YoutubeLogo size={theme.fontSize.large} color={theme.colors.black} />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5586998273731&text=Ol%C3%A1%2C%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
          target="_blank"
        >
          <WhatsappLogo
            size={theme.fontSize.large}
            color={theme.colors.black}
          />
        </Link>
      </NetworkContainer>

      <Text>© Copyright 2022 Lira - Todos os direitos reservados.</Text>
    </Container>
  );
}
