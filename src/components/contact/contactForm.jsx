const ContactForm = () =>{
    return (
        <>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-group">
              {/* <label htmlFor="resume">Resume (optional)</label>
              <input type="file" id="resume" className="form-control-file" /> */}
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </>
    )
}

export default ContactForm