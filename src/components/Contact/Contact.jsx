import React from 'react'
import './Contact.css'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fb5ad167-ae86-4fb1-96b0-4ec4493321a7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



    return (
        <div className='contact'> 
         <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label > Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mobile number' required/>
            <label >Write Your Message</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='Btn '> Submit now</button>
         </form>
         <span>{result}</span>
        </div>
    )
}

export default Contact
