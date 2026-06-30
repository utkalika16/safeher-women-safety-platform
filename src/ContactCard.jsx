function ContactCard(props) {

  return (
    <div className="card">

      <h2>
        {props.name}
      </h2>

      <p>
        {props.phone}
      </p>

      <a href={`tel:${props.phone}`}>

        Call Now

      </a>

    </div>
  );
}

export default ContactCard;