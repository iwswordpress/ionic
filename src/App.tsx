import { IonApp, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DAILY MOMENTS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Home />
    </IonApp>
  );
};

export default App;
