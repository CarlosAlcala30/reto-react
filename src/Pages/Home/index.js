import React, { Fragment } from "react";
import "./style.scss"
import { Container, Row, Col } from "reactstrap";
import Media from 'react-media';
import AsideRight from "../../Components/Aside/RightAside";
import Footer from '../../Components/Footer';
                                                                                                      
const HomePage = props => {
    return (
        <main className="container">
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
              <Container classname="main-container">
               <Row>
                 <Col className="col-2"></Col>
                 <Col className="col-6"></Col>
                 <AsideRight />
               </Row>     
             </Container>

             )} <Footer />
          </Fragment>
        )}
       </Media>
     </main>
       

     );
}

export default HomePage