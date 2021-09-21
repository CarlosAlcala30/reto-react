import React, { Fragment } from "react";
import "./style.scss"
import { Container, Row, Col } from "reactstrap";
import Media from "react-media";
import AsideLink from "../../Components/Aside/LeftAside/AsideLink"
//import iconHome from "../../Assets/Images/icons/home.svg"
import IconSocialNetwork from "../../Components/Aside/LeftAside/iconSocialNetwork"
//import imageIcon from "../../Assets/Images/icons/twitter.svg"
import DevCard from "../../Components/Cards/DevCommunityCard";
import icons from "../../Components/Aside/LeftAside/AsideLink/icons"
import iconsOther from "../../Components/Aside/LeftAside/AsideLink/iconsOther";
import iconSocial from "../../Components/Aside/LeftAside/AsideLink/iconSocial";
import AsideTag from "../../Components/Aside/LeftAside/AsideTags";
import hastag from "../../Components/Aside/LeftAside/AsideTags/hastag";
import ShopCard from "../../Components/Cards/ShopCard";
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
              <div>
                  <Container>
                      <Row>
                          <Col>
                          <div>
                            <DevCard />
                          </div>
                          <div class="list-icons">
                            {
                              icons.map(icon => <AsideLink text={icon.text} image= {icon.img} />)
                            }
                          </div>
                          <div className="aside-other">
                            <h5><b>Other</b></h5>
                            <div class="list-icons">
                            {
                              iconsOther.map(icon => <AsideLink text={icon.text} image= {icon.img} />)
                            }
                            </div>
                          </div>
                          <div className="aside-icons">
                            {
                              iconSocial.map(icon => <IconSocialNetwork  image= {icon.img} />)
                            }
                          
                          </div>
                          <nav>
                          <h5><b>Popular Tags</b></h5>
                            <div className="aside-tags">
                            {
                              hastag.map(hastag => <AsideTag  text= {hastag.text} />)
                            }
                            </div>
                          </nav>
                          <div>
                            <ShopCard />
                          </div>
                          </Col>
                          <Col xs='12' md='8' xl='6'>
                          <Content/>
                          </Col>
                          <Col xs='0' md='0' xl='3'>
                          <RightSidebar/>
                          </Col> 
                      </Row>
                  </Container>
              </div>
            )}
             )} <Footer />
          </Fragment>
        )}
       </Media>
     </main>
       

     );
}

export default HomePage