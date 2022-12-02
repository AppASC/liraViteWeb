import {
  Container,
  Title,
  RightContainer,
  Navigator,
  Item,
  Button,
} from "./styles";

export type NavProps = {
  label: string;
  path: string;
};

export type HeaderProps = {
  data: {
    company: string;
    navigator: NavProps[];
    button: {
      hasButton: boolean;
      label: string;
      path: string;
    };
  };
};

export function Header({ data }: HeaderProps) {
  return (
    <Container>
      <Title href="#">{data?.company}</Title>
      <RightContainer>
        <Navigator>
          {data?.navigator.map((nav) => (
            <Item href={nav.path} key={nav?.label}>
              {nav?.label}
            </Item>
          ))}
        </Navigator>
        {data?.button.hasButton && <Button>{data?.button.label}</Button>}
      </RightContainer>
    </Container>
  );
}
