import React, { Component } from "react";

import logoBBC from "../assets/img/logo-bbc.png";
import logoBI from "../assets/img/logo-bi.png";
import logoForbes from "../assets/img/logo-forbes.png";
import logoTechcrunch from "../assets/img/logo-techcrunch.png";
import logo from "../assets/img/logo.png";

import realtor1 from "../assets/img/realtor-1.jpeg";
import realtor2 from "../assets/img/realtor-2.jpeg";
import realtor3 from "../assets/img/realtor-3.jpeg";
import story_1 from "../assets/img/story-1.jpeg";
import story_2 from "../assets/img/story-2.jpeg";

import house_1 from "../assets/img/house-1.jpeg";
import house_2 from "../assets/img/house-2.jpeg";
import house_3 from "../assets/img/house-3.jpeg";
import house_4 from "../assets/img/house-4.jpeg";
import house_5 from "../assets/img/house-5.jpeg";
import house_6 from "../assets/img/house-6.jpeg";

import gal_1 from "../assets/img/gal-1.jpeg";
import gal_2 from "../assets/img/gal-2.jpeg";
import gal_3 from "../assets/img/gal-3.jpeg";
import gal_4 from "../assets/img/gal-4.jpeg";
import gal_5 from "../assets/img/gal-5.jpeg";
import gal_6 from "../assets/img/gal-6.jpeg";
import gal_7 from "../assets/img/gal-7.jpeg";
import gal_8 from "../assets/img/gal-8.jpeg";
import gal_9 from "../assets/img/gal-9.jpeg";
import gal_10 from "../assets/img/gal-10.jpeg";
import gal_11 from "../assets/img/gal-11.jpeg";
import gal_12 from "../assets/img/gal-12.jpeg";
import gal_13 from "../assets/img/gal-13.jpeg";
import gal_14 from "../assets/img/gal-14.jpeg";

import Btn from "../Components/Btn";
import Feature from "../Components/Feature";
import House from "../Components/House";
import Person from "../Components/Person";

export class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="header">
					<div className="header-main">
						<img src={logo} className="header-main-logo" alt="" />
						<h3 className="header-main-subTitle">YOUR OWN HOME</h3>
						<h1 className="header-main-title">The ultimate personal freedom</h1>
						<Btn text={"VIEW OUR PROPERTIES"} />
						<div className="seen-on">
							<span>Seen On</span>
						</div>

						<div className="land">
							<img src={logoBBC} className="land-logo" alt="" />
							<img src={logoTechcrunch} className="land-logo" alt="" />
							<img src={logoBI} className="land-logo" alt="" />
							<img src={logoForbes} className="land-logo" alt="" />
						</div>
					</div>

					<div className="header-realtors">
						<p className="title">TOP 3 REALTORS</p>
						<Person src={realtor1} name={"Erik Feinman"} hour={"245 HOUSES SOLD"} />
						<Person src={realtor2} name={"Kim Brown"} hour={"212 HOUSES SOLD"} />
						<Person src={realtor3} name={"Toby Ramsey"} hour={"198 HOUSES SOLD"} />
					</div>
				</div>

				<div id="feature">
					<Feature
						icon={"fa fa-globe fa-4x"}
						title={"World's best luxury homes"}
						prag={
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
						}
					/>
					<Feature
						icon={"fas fa-trophy fa-4x"}
						title={"Only the best properties"}
						prag={"Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."}
					/>
					<Feature
						icon={"fa fa-map-marker-alt fa-4x"}
						title={"All homes in in top locations"}
						prag={"Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."}
					/>
					<Feature
						icon={"fa fa-key fa-4x"}
						title={"New home in one week"}
						prag={
							"Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
						}
					/>
					<Feature
						icon={"fa fa-chalkboard fa-4x"}
						title={"Top 1% realtors"}
						prag={
							"Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
						}
					/>
					<Feature
						icon={"fa fa-lock fa-4x"}
						title={"Secure payments on nexter"}
						prag={"Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."}
					/>
				</div>

				<div id="story" className="story">
					<div className="left">
						<img src={story_1} alt="" className="story__1" />
						<img src={story_2} alt="" className="story__2" />
					</div>

					<div className="right">
						<h3>HAPPY CUSTOMERS</h3>
						<h2>“The best decision of our lives”</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
							pariatur voluptatibus. Quidem consequatur harum volupta!
						</p>
						<Btn text={"FIND YOUR OWN HOME"} />
					</div>
				</div>

				<div id="houses">
					<House
						img={house_1}
						title={"Beautiful Familiy House"}
						location={"USA"}
						rooms={"5 rooms"}
						area={"325 m2"}
						cost={"$1,200,000"}
					/>
					<House
						img={house_2}
						title={"Modern Glass Villa"}
						location={"Canada"}
						rooms={"6 rooms"}
						area={"450 m2"}
						cost={"$2,200,000"}
					/>
					<House
						img={house_3}
						title={"Cozy Country House"}
						location={"UK"}
						rooms={"5 rooms"}
						area={"752 m2"}
						cost={"$1,800,000"}
					/>
					<House
						img={house_4}
						title={"Large Rustical Villa"}
						location={"Portugal"}
						rooms={"8 rooms"}
						area={"561 m2"}
						cost={"$3,200,000"}
					/>
					<House
						img={house_5}
						title={"Majestic Palace House"}
						location={"Italy"}
						rooms={"2 rooms"}
						area={"255 m2"}
						cost={"$8,900,000"}
					/>
					<House
						img={house_6}
						title={"Modern Familiy Apartment"}
						location={"Germany"}
						rooms={"7 rooms"}
						area={"300 m2"}
						cost={"$3,200,000"}
					/>
				</div>

				<div className="gallery" id="gallery">
					<figure className="img-1">
						<img src={gal_1} alt="" />
					</figure>

					<figure className="img-2">
						<img src={gal_2} alt="" />
					</figure>

					<figure className="img-3">
						<img src={gal_3} alt="" />
					</figure>

					<figure className="img-4">
						<img src={gal_4} alt="" />
					</figure>

					<figure className="img-5">
						<img src={gal_5} alt="" />
					</figure>

					<figure className="img-6">
						<img src={gal_6} alt="" />
					</figure>

					<figure className="img-7">
						<img src={gal_7} alt="" />
					</figure>

					<figure className="img-8">
						<img src={gal_8} alt="" />
					</figure>

					<figure className="img-9">
						<img src={gal_9} alt="" />
					</figure>

					<figure className="img-10">
						<img src={gal_10} alt="" />
					</figure>

					<figure className="img-11">
						<img src={gal_11} alt="" />
					</figure>

					<figure className="img-12">
						<img src={gal_12} alt="" />
					</figure>

					<figure className="img-13">
						<img src={gal_13} alt="" />
					</figure>

					<figure className="img-14">
						<img src={gal_14} alt="" />
					</figure>
				</div>
			</div>
		);
	}
}

export default Home;
