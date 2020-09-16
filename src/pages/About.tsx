import {
	IonCardTitle,
	IonPage,
	IonCard,
	IonCardContent,
	IonCardHeader,
} from "@ionic/react";
import React from "react";
import Header from "../components/header/Header";

const About = () => {
	return (
		<IonPage>
			<Header />
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>This is our about page.</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					Thanks for reading this text. Go have a cookie or something.
				</IonCardContent>
			</IonCard>
		</IonPage>
	);
};

export default About;
