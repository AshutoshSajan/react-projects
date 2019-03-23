import React, {Component} from 'react';
class Hero extends Component {
	render(){
		return(
			<div>
				<section className="hero container">
					<a href="https://altcampus.io" target="blank">
						<img className="hero-img" src="assets/media/logo.png" alt="altcampus-logo-img"/>
					</a>
					<h1>altcampus an <br/> alternative to collge</h1>
					<h4>web developer-graphic artist-user experience designer</h4>
				</section>
			</div>
		);
	}
}

export default Hero;