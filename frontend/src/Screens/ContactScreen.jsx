import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import Layout from "../Components/Layout";

const ContactScreen = () => {
  return (
    <Layout>
      <div className="mt-4">
        <div className="text-center">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What is ProShop?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                ProShop is an ecommerce website that specializes in high-quality
                shirts. We offer a wide range of shirt styles and customization
                options, allowing customers to design a shirt that perfectly
                suits their style and preferences.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                How do I customize my shirt on ProShop?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                To customize your shirt, simply choose your preferred shirt
                style and then select the customization options that you want,
                such as collar style, cuff type, and button color. You can also
                choose additional options like pockets and buttons.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                How do I pay for my order on ProShop?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>ProShop accepts Cash on Delivery</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                How long does shipping take on ProShop?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Shipping times may vary depending on your location and the
                shipping method you choose. However, we typically process and
                ship orders within 10-12 business days. You can track your order
                using our live order tracking feature to get real-time updates
                on its delivery status.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                What is your return policy?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                We want all of our customers to be completely satisfied with
                their purchases. If you are not satisfied with your order for
                any reason, you can return it to us at the time of delivery for
                a full refund or exchange. Only if there is any defects while
                delivering you the product
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                How can I contact ProShop?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                You can contact ProShop by phone, email. Our customer support
                team is available to assist you with any questions or concerns
                you may have. Email: exmpe@exmpl.com Phone: 0324030021
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Layout>
  );
};

export default ContactScreen;
