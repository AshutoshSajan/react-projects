import React, {Component} from 'react';

class Header extends Component {
	render(){
		return(
			<div>
				<header className="header cf">
					<a className="logo" href="https://www.altcampus.io" target="blank">altcampus</a>
					<ul class="primarry-nav">
						<li className="list inline-blk"><a href="#portfolio-sec">portfolio</a></li>
						<li className="list inline-blk"><a href="#about-sec">about</a></li>
						<li className="list inline-blk"><a href="#form-sec">contact</a></li>
					</ul>
				</header>
			</div>
		);
	}
}

export default Header;