import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
interface EmailTemplateProps {
  firstName: string;
}
// @ts-ignore
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ resp }) => (
  <Html>
    <Head />
    <Preview>Yelp recent login</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img src={`https://swipecrafters.com/`} />
        </Section>

        <Section>
          <Row>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Привет {resp.emailToSend.split("@")[0]}!
              </Heading>

              <Text style={title}>
                Информация о файле:
              </Text>
              <Text>
                Имя файла: {resp.fileName}
              </Text>
              <Text>
                {resp?.fileType} |{' '}
                {(resp?.fileSize / 1024 / 1024).toFixed(3)} MB
              </Text>
            </Column>
          </Row>
        </Section>

        <Section>
          <Row>
            <Column>
              <Button
                href={resp.fileLink}
              >
                Перейти к файлу
              </Button>
            </Column>
          </Row>
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
          U.S.A. | www.yelp.com
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  padding: "30px 20px",
};
const title = {
  fontSize: "30px",
  fontWeight: 700,
}

