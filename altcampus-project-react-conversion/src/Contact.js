import React, {Component}from 'react';

class Contact extends Component {
	render() {
		return(
			<div>
				<section id="form-sec" className="container">
					<form>
						<fieldset>
							<legend className="secondary-clr">contact me</legend>
							<input className="info-input" type="text" name="name" placeholder="name" required/>
							<br/>
							<input className="info-input" type="text" name="name" placeholder="email address" required/>
							<br/>
							<input className="info-input" type="text" name="name" placeholder="phone no." required/>
							<br/>
							<textarea  name="message" placeholder="message" rows="6"></textarea> 
							<br/>
							<button className="btn form-btn primary-clr" type="submit" value="send">send</button>
						</fieldset>
					</form>
				</section>
			</div>
		);
	}
}

export default Contact;