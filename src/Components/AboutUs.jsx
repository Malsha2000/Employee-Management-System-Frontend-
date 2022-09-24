import React from "react";
//import Logo from "../../Assets/Images/Braintech.svg";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutUs = () => {
	return (
		<div class="aas">
			<Header />
			<div className="flex justify-center items-center">
				<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-20 mt-20">
					<a href="#">
						<img
							class="rounded-t-lg"
							src="https://us.123rf.com/450wm/rastudio/rastudio1911/rastudio191100405/133797941-business-team-brainstorm-idea-and-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooper.jpg?ver=6"
							alt=""
						/>
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Who we are.......
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
							CITY J7 is Sri Lanka's premier end-to-end
							digital solutions provider in Mobile and
							Enterprise Solutions, Artificial Intelligence
							and Machine Learning, Immersive Technologies,
							and Game Design and Development.
							<br />
							<br />
							Fusing creativity and talent with
							industry-leading technology, our solutions are
							developed by a team of 200 specialists who
							strive to enable digital disruption for our
							clients. Given our proven track record, our
							clients entrust us with their digital needs,
							and in turn we help them to reach the
							unreachable.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AboutUs;
