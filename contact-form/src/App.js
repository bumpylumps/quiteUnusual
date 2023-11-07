import { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const recaptcha = useRef();

  
  async function submitForm(event){
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();

    if(!captchaValue){
      alert('please verify the captcha')
    } else {
      const res = await fetch("http://localhost:8300/contact/verify", {
        method: "POST",
        body: JSON.stringify({ captchaValue }),
        headers: {
          "content-type": "application/json",
        }, 
    });

    const data = await res.json()
    console.log(data);
    
    if(data){
      // make form submission

      alert("Form submission successful!")
    } else {
      alert("recapthca validation failed!");
    }
    }
  }

  return (
      <div className="container submit">
                <section className="col-6 col-12-narrower">
			    	<h3>Got a story or topic submission? <br/> Slippery slide into our DMs</h3>
			    	<form onSubmit={submitForm} method="POST" id="contact-form">
			    		<div className="row gtr-50">
			    			<div className="col-6 col-12-mobilep">
			    				<input type="text" name="name" id="name" placeholder="Name" />
			    			</div>
			    			<div className="col-6 col-12-mobilep">
			    				<input type="email" name="email" id="email" placeholder="Email" />
			    			</div>
							<div className="col-6 col-12-mobilep">
			    				<input type="text" name="subject" id="subject" placeholder="Subject" />
			    			</div>
			    			<div className="col-12">
			    				<textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
			    			</div>
			    			<div className="col-12">
			    				<ul className="actions">
									<ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
			    					<li><input type="submit" id="feedback-button" className="button alt" value="Send Message" /></li>
			    				</ul>
			    			</div>
			    		</div>
			    	</form>
			    </section>
      </div>
  );
}

export default App;
