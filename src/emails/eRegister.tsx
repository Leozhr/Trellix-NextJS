import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components';

interface eRegisterProps {
  name: string;
  href: string;
}

const eRegister = ({ name, href }: eRegisterProps) => (
  <Html>
    <Head />
    <Preview>
      Seja bem-vindo ao nosso sistema! Estamos empolgados em tê-lo conosco.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <h1>TRELLIX</h1>
        <Text style={paragraph}>Olá, {name},</Text>
        <Text style={paragraph}>
        Você recebeu esta mensagem porque seu endereço de e-mail foi registrado em nosso site. Por favor, clique no botão abaixo para verificar seu endereço de e-mail e confirmar que você é o proprietário desta conta.
        </Text>
        <Text style={paragraph}>Se você não se registrou conosco, por favor, ignore este e-mail.</Text>
        <Section style={btnContainer}>
          <Button pY={14} style={button} href={href}>
            Confirmar Email
          </Button>
        </Section>
        <Text style={paragraph}>
          Atenciosamente,
          <br />
          Suporte Trellix
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Leonardo © 2023 Trellix</Text>
      </Container>
    </Body>
  </Html>
);

export { eRegister };

const main = {
  backgroundColor: '#ffffff',
  color: '#000',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  margin: '20px 0',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#000',
  borderRadius: '3px',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};


