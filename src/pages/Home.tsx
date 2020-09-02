import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonToast,
	IonCardContent,
	IonCardHeader,
} from "@ionic/react";
import React, { useState } from "react";
import mattMeese from "../assets/mattMeese.png";
import "./Home.css";

const Home: React.FC = () => {
	const [showToast, setShowToast] = useState(false);
	const [answer, setAnswer] = useState("");

	function getRandomIntInclusive(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	}

	const answers: string[] = [
		"The ball says it will end in disaster... but it could be fun though!",
		"It could be fun!",
		"The ball says that you will probably want to gouge out your eye with a rusty spoon... but it could be fun!",
		"It could be fun though!",
	];

	const giveAnswer = () : void => {
		setShowToast(true);
		setAnswer(answers[getRandomIntInclusive(0, answers.length - 1)]);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Consult the oracle</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard>
					<IonCardHeader>Ask a question, then tap Matt Meese's mug.</IonCardHeader>
					<IonCardContent onClick={giveAnswer}>
						<img src={mattMeese} alt="semi-magic 8 ball" />
					</IonCardContent>
				</IonCard>
				<IonToast
					isOpen={showToast}
					onDidDismiss={() => setShowToast(false)}
					message={answer}
					buttons={[
						{
							side: "start",
							icon: "star",
							text: "close",
							handler: () => {
								console.log("Favorite clicked");
							},
						},
					]}
				/>
			</IonContent>
		</IonPage>
	);
};

export default Home;
