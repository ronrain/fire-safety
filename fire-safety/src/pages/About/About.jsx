const About = () => {
  return (
    <main className="container">
  <div className="row">
    <div className="col-lg-8">
      <h1 className="display-4">Who We Are</h1>
      <p className="lead">
        We are a fire safety company serving the tri-state area. Our expertise extends to both commercial and residential properties, including prestigious locations such as UBS Arena and Disney Headquarters in Manhattan. We pride ourselves of having all <strong>FDNY Certified Fire Guards</strong>!
      </p>

      <h3 className="mt-4">Is Your Home Safe?</h3>
      <p>
        Let one of our technicians conduct a thorough inspection of your home. We'll assess smoke alarms, exits, egress routes, and potential combustible hazards.
      </p>

      <p>
        Ask us about our state-of-the-art Wi-Fi smoke detectors for added convenience without compromising reliability. Contact us today!
      </p>
    </div>
    <div className="col-lg-4">
      <img src="/fire-safety.png" alt="At Home Fire Safety" class="img-fluid mt-5" />
    </div>
  </div>
</main>
  )
}

export default About