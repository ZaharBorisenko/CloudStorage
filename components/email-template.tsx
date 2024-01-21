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

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <Html>
    <Head />
    <Preview>Yelp recent login</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img src={`https://swipecrafters.com/`} />
        </Section>

        <Section style={content}>
          <Row>
            {/*<Img*/}
            {/*  style={image}*/}
            {/*  width={620}*/}
            {/*  src={`${baseUrl}/static/yelp-header.png`}*/}
            {/*/>*/}
            <p>header</p>
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi {firstName},
              </Heading>
              <Text
                style={{
                  color: "rgb(0,0,0, 0.5)",
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                *Approximate geographic location based on IP address:
              </Text>

              <Text style={paragraph}>
                If this was you, there&apos;s nothing else you need to do.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                If this wasn&apos;t you or if you have additional questions, please
                see our support page.
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: "0" }}>
            <Column style={containerButton} colSpan={2}>
              <Button style={button}>Learn More</Button>
            </Column>
          </Row>
        </Section>

        <Section style={containerImageFooter}>
          {/*<Img*/}
          {/*  style={image}*/}
          {/*  width={620}*/}
          {/*  src={`${baseUrl}/static/yelp-footer.png`}*/}
          {/*/>*/}
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


const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
