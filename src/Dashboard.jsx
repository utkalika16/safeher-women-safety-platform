import {
  useState,
  useEffect
} from "react";

import SOSButton from "./SOSButton";
import ContactCard from "./ContactCard";

function Dashboard() {

  const [count, setCount] =
    useState(0);

  const [tip, setTip] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [latitude, setLatitude] =
    useState("");

  const [longitude, setLongitude] =
    useState("");

  const [time, setTime] =
    useState(new Date());

  const [emergency, setEmergency] =
    useState(false);

  const [contacts, setContacts] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "contacts"
        )
      ) || []

    );

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  useEffect(() => {

    fetch(
      "https://api.adviceslip.com/advice"
    )

      .then((res) => res.json())

      .then((data) => {

        setTip(
          data.slip.advice
        );

      });

  }, []);

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date());

    }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  const getLocation = () => {

    navigator.geolocation
      .getCurrentPosition(

        (position) => {

          setLatitude(
            position.coords.latitude
          );

          setLongitude(
            position.coords.longitude
          );

          setLocation(

            "Latitude : " +

            position.coords.latitude +

            " | Longitude : " +

            position.coords.longitude

          );

        }

      );

  };

  const openMaps = () => {

    window.open(

`https://www.google.com/maps?q=${latitude},${longitude}`

    );

  };

  const addContact = () => {

    if(name && phone){

      const updatedContacts = [

        ...contacts,

        {
          name,
          phone
        }

      ];

      setContacts(
        updatedContacts
      );

      localStorage.setItem(

        "contacts",

        JSON.stringify(
          updatedContacts
        )

      );

      setName("");
      setPhone("");
    }
  };

  return (

    <div className="container">

      <h1>
        Emergency Dashboard
      </h1>

      <h2>
        Live Time :
        {time.toLocaleTimeString()}
      </h2>

      <button
        onClick={() =>
          setEmergency(
            !emergency
          )
        }
      >

        Activate Emergency

      </button>

      <h2>

        {

          emergency

          ?

          "🚨 Emergency Activated"

          :

          "✅ Safe Mode"

        }

      </h2>

      <h2>
        SOS Alerts Sent :
        {count}
      </h2>

      <SOSButton
        count={count}
        setCount={setCount}
      />

      <br />
      <br />

      <button onClick={getLocation}>

        Get Live Location

      </button>

      <br />
      <br />

      <button onClick={openMaps}>

        Open In Google Maps

      </button>

      <h3>
        {location}
      </h3>

      <h2>
        AI Safety Tip
      </h2>

      <div className="card">

        <p>
          {tip}
        </p>

      </div>

      <h2>
        Nearby Safe Places
      </h2>

      <div className="flex">

        <div
          className="card safe-card"

          onClick={() =>
            window.open(
"https://www.google.com/maps/search/police+station+near+me"
            )
          }
        >

          <h1>👮</h1>

          <h3>
            Police Station
          </h3>

          <p>
            Nearby emergency police help
          </p>

        </div>

        <div
          className="card safe-card"

          onClick={() =>
            window.open(
"https://www.google.com/maps/search/hospital+near+me"
            )
          }
        >

          <h1>🏥</h1>

          <h3>
            Hospital
          </h3>

          <p>
            Nearby medical support
          </p>

        </div>

        <div
          className="card safe-card"

          onClick={() =>
            window.open(
"https://www.google.com/maps/search/women+help+center+near+me"
            )
          }
        >

          <h1>👩</h1>

          <h3>
            Women Help Center
          </h3>

          <p>
            Nearby women safety centers
          </p>

        </div>

      </div>

      <h2>
        Add Trusted Contact
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e)=>
          setPhone(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={addContact}>

        Add Contact

      </button>

      <h2>
        Trusted Contacts
      </h2>

      <div className="flex">

        <ContactCard
          name="Police"
          phone="100"
        />

        <ContactCard
          name="Mom"
          phone="9876543210"
        />

        {

          contacts.map((item,index)=>(

            <ContactCard
              key={index}
              name={item.name}
              phone={item.phone}
            />

          ))

        }

      </div>

    </div>

  );
}

export default Dashboard;
















































































// import {
//   useState,
//   useEffect
// } from "react";

// import SOSButton from "./SOSButton";
// import ContactCard from "./ContactCard";

// function Dashboard() {

//   const [count, setCount] =
//     useState(0);

//   const [tip, setTip] =
//     useState("");

//   const [location, setLocation] =
//     useState("");

//   const [latitude, setLatitude] =
//     useState("");

//   const [longitude, setLongitude] =
//     useState("");

//   const [time, setTime] =
//     useState(new Date());

//   const [emergency, setEmergency] =
//     useState(false);

//   const [contacts, setContacts] =
//     useState(

//       JSON.parse(
//         localStorage.getItem(
//           "contacts"
//         )
//       ) || []

//     );

//   const [name, setName] =
//     useState("");

//   const [phone, setPhone] =
//     useState("");

//   useEffect(() => {

//     fetch(
//       "https://api.adviceslip.com/advice"
//     )

//       .then((res) => res.json())

//       .then((data) => {

//         setTip(
//           data.slip.advice
//         );

//       });

//   }, []);

//   useEffect(() => {

//     setInterval(() => {

//       setTime(new Date());

//     }, 1000);

//   }, []);

//   const getLocation = () => {

//     navigator.geolocation
//       .getCurrentPosition(

//         (position) => {

//           setLatitude(
//             position.coords.latitude
//           );

//           setLongitude(
//             position.coords.longitude
//           );

//           setLocation(

//             "Latitude : " +

//             position.coords.latitude +

//             " Longitude : " +

//             position.coords.longitude

//           );

//         }

//       );

//   };

//   const openMaps = () => {

//     window.open(

// `https://www.google.com/maps?q=
// ${latitude},
// ${longitude}`

//     );

//   };

//   const addContact = () => {

//     if(name && phone){

//       const updatedContacts = [

//         ...contacts,

//         {
//           name,
//           phone
//         }

//       ];

//       setContacts(
//         updatedContacts
//       );

//       localStorage.setItem(

//         "contacts",

//         JSON.stringify(
//           updatedContacts
//         )

//       );

//       setName("");
//       setPhone("");
//     }
//   };

//   return (
//     <div className="container">

//       <h1>
//         Emergency Dashboard
//       </h1>

//       <h2>
//         Live Time :
//         {time.toLocaleTimeString()}
//       </h2>

//       <button
//         onClick={() =>
//           setEmergency(
//             !emergency
//           )
//         }
//       >

//         Activate Emergency

//       </button>

//       <h2>

//         {
//           emergency ?

//           "🚨 Emergency Activated"

//           :

//           "✅ Safe Mode"
//         }

//       </h2>

//       <h2>
//         SOS Alerts Sent :
//         {count}
//       </h2>

//       <SOSButton
//         count={count}
//         setCount={setCount}
//       />

//       <br /><br />

//       <button onClick={getLocation}>

//         Get Live Location

//       </button>

//       <br /><br />

//       <button onClick={openMaps}>

//         Open In Google Maps

//       </button>

//       <h3>{location}</h3>

//       <h2>
//         AI Safety Tip
//       </h2>

//       <div className="card">

//         <p>{tip}</p>

//       </div>

//       <h2>
//         Nearby Safe Places
//       </h2>

//       <div className="flex">

//         <div
//           className="card"
//           onClick={() =>
//             window.open(
// "https://www.google.com/maps/search/police+station+near+me"
//             )
//           }
//         >

//           👮 Police Station

//         </div>

//         <div
//           className="card"
//           onClick={() =>
//             window.open(
// "https://www.google.com/maps/search/hospital+near+me"
//             )
//           }
//         >

//           🏥 Hospital

//         </div>

//         <div
//           className="card"
//           onClick={() =>
//             window.open(
// "https://www.google.com/maps/search/women+help+center+near+me"
//             )
//           }
//         >

//           👩 Women Help Center

//         </div>

//       </div>

//       <h2>
//         Add Trusted Contact
//       </h2>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e)=>
//           setName(e.target.value)
//         }
//       />

//       <br /><br />

//       <input
//         type="text"
//         placeholder="Enter Phone"
//         value={phone}
//         onChange={(e)=>
//           setPhone(e.target.value)
//         }
//       />

//       <br /><br />

//       <button onClick={addContact}>
//         Add Contact
//       </button>

//       <h2>
//         Trusted Contacts
//       </h2>

//       <div className="flex">

//         <ContactCard
//           name="Police"
//           phone="100"
//         />

//         <ContactCard
//           name="Mom"
//           phone="9876543210"
//         />

//         {
//           contacts.map((item,index)=>(

//             <ContactCard
//               key={index}
//               name={item.name}
//               phone={item.phone}
//             />

//           ))
//         }

//       </div>

//     </div>
//   );
// }

// export default Dashboard;