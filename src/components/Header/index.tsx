import logoImg from "../../assets/logoSaveMoney.svg";

import { Container, ContentLogo, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <ContentLogo>
          <img src={logoImg} alt="save money" />
          <span>Save money</span>
        </ContentLogo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
