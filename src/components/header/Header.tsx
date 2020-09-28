import React, { useState, useEffect } from "react";
import {
	IonHeader,
	IonToolbar,
	IonButton,
	IonButtons,
	IonIcon,
} from "@ionic/react";
import {
	sunnyOutline,
	sunnySharp,
	moonOutline,
	moonSharp,
	sunny,
} from "ionicons/icons";
import {
	Plugins,
	HapticsImpactStyle
  } from '@capacitor/core';
const {Haptics} = Plugins;

const Header = () => {

	function handleVibrate(){
		Haptics.vibrate()
	}

	return (
		<IonHeader>
			<IonToolbar>
				{/* <IonTitle></IonTitle> */}
				<IonButtons slot="secondary">
					<IonButton routerLink="about">About</IonButton>
					<IonButton routerLink="home">Home</IonButton>
					<IonButton onClick={handleVibrate}>
						<IonIcon
							md={sunnySharp}
							ios={sunnyOutline}
						/>
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
