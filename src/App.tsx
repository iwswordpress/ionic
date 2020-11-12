import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DAILY MOMENTS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>Add some content here…</IonContent>
    </IonApp>
  );
};

export default App;
