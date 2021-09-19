import React from 'react';
//import './index.css';
//import Avatar from '@material-ui/core/Avatar';
//import firebase from '../../config/firebaseConfig';
//import { useAuthState } from 'react-firebase-hooks/auth';
import SponsorsBlock from './SponsorsBlock';
import Listings from './Listings';
import NewsBlock from './NewsBlock';
import DiscussBlock from './discussBlock';
import HelpBlock from './HelpBlock';
import Explainlikeimfive from './Explainlikeimfive';
import ChallengeBlock from './ChallengeBlock';
import MetaBlock from './MetaBlock';



const AsideRight = () => {
  
  //  const [user, loading, error] = useAuthState(firebase.auth()); //eslint-disable-line

 return (
      
          <aside
            className="d-none d-xl-block col-xl-3">
              <SponsorsBlock />
              <Listings />
              <NewsBlock />
              <HelpBlock />
              <DiscussBlock />
              <Explainlikeimfive />
              <ChallengeBlock />
              <MetaBlock />
           </aside>
        
      );
        
};

export default AsideRight;
