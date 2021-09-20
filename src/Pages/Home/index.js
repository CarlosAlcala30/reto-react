import React, { Fragment } from "react";
import "./style.scss"
import { Container, Row, Col } from "reactstrap";
import Media from 'react-media';
import AsideRight from "../../Components/Aside/RightAside";
import Footer from '../../Components/Footer';
                                                                                                      
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
           <main>
             <Container>
               <Row>
                 <Col className="col-2"></Col>
                 <Col className="col-6"></Col>
                 <AsideRight />
               </Row>
             </Container>
           </main>
            )}
          </Fragment>
        )}
      </Media>
    </main>
            

     );
}

export default HomePage