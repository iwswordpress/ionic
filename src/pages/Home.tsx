import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ padding: '50px 30px' }}>
          <h1>Test</h1>
        </div>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
