import logoImg from "../../assets/logoSaveMoney.svg";

import { Container, ContentLogo, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <ContentLogo>
          <img src={logoImg} alt="save money" />
          <span>Save money</span>
        </ContentLogo>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
