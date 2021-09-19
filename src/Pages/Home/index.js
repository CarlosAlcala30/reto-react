import React, { Fragment } from "react";
import "./style.scss"
import { Container, Row, Col } from "reactstrap";
import Media from "react-media";

const HomePage = props => {
    return (
        <main>
      <Media
        queries={{
          small: "(max-width: 399px)",
          medium: "(min-width: 400px) and ((max-width: 699px)",
          large: "(min-width: 700px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div></div>
            )}

            {matches.medium && (
              <div></div>
            )}                

            {matches.large && (
              <div>
                  <Container>
                      <Row>
                          <Col></Col>
                          <Col></Col>
                          <Col></Col>
                      </Row>
                  </Container>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </main>
            

     );
}