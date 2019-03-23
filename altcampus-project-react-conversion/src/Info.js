import React, {Component} from 'react';

class Info extends Component {
	render(){
		return(
			<div>
				<section className="info-sec container">
					<div className="info-txt-box inline-blk">
						<h3>location</h3>
						<p className="addr">
							vpo:rakkar,sidhbari	<br/> dharamshala, 176057
						</p>
					</div><div className="info-txt-box inline-blk">
						<h3>around the web</h3>
						<ul>
							<li className="icon-list inline-blk"><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li className="icon-list inline-blk"><a href=""><i className="fab fa-google-plus-g"></i></a></li>
							<li className="icon-list inline-blk"><a href=""><i className="fab fa-twitter"></i></a></li>
							<li className="icon-list inline-blk"><a href=""><i className="fab fa-linkedin-in"></i></a></li>
							<li className="icon-list inline-blk"><a href=""><i className="fab fa-dribbble"></i></a></li>
						</ul>	
					</div><div className="info-txt-box inline-blk">
						<h3>about altcampus</h3>
						<p className="about">
							A 6-month program that helps <br/>  you become a software developer by <strong>altcampus</strong>.
						</p>
					</div>
				</section>
			</div>
		);
	}
} 

export default Info;