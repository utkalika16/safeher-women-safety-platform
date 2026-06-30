function SOSButton(props) {

  const sendAlert = () => {

    alert(
      "Emergency Alert Sent!"
    );

    props.setCount(
      props.count + 1
    );
  };

  return (
    <button onClick={sendAlert}>

      SOS Emergency

    </button>
  );
}

export default SOSButton;