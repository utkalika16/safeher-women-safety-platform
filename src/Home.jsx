function Home() {

  return (

    <div className="container">

      <div className="hero">

        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
          alt="women safety"
        />

        <div className="hero-text">

          <h1>
            Welcome To SafeHer
          </h1>

          <h2>
            Women Safety &
            Emergency Support Platform
          </h2>

          <p>
            Empowering women with
            emergency support,
            live location tracking,
            safe routes,
            AI safety tips and
            trusted contacts.
          </p>

        </div>

      </div>

      <div className="flex">

        <div className="card feature-card">
          ✔ SOS Emergency
        </div>

        <div className="card feature-card">
          ✔ GPS Tracking
        </div>

        <div className="card feature-card">
          ✔ Safe Routes
        </div>

        <div className="card feature-card">
          ✔ AI Safety Tips
        </div>

      </div>

    </div>

  );
}

export default Home;