import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonButtons } from "@ionic/react";
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';


const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        {/* <IonTitle></IonTitle> */}
        <IonButtons slot="secondary">
          <IonButton routerLink="about">
            About
          </IonButton>
		  <IonButton routerLink="home">
            Home
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
