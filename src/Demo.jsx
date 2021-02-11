// import React, { useState } from "react";

// export default function Demo() {
//   const [et, setEt] = useState({
//     fn: "",
//     pass: "",
//   });
//   // const [password, setPassword] = useState();
//   // const [final, setFinal] = useState();
//   function oc(e) {
//     // const { name, value } = e.target;
//     // if (name === "name") {
//     //   setEt({ ...et, fn: value });
//     // } else {
//     //   setEt({ ...et, pass: value });
//     // }
//     // setEt((preValue) => {
//     //   // console.log(preValue);
//     //   return {
//     //     ...preValue,
//     //     [name]: value,
//     //   };
//     // });
//     const value = e.target.value;
//     setEt({ ...et, [e.target.name]: value });
//   }

//   function onSub(e) {
//     e.preventDefault();
//   }
//   function sub() {}

//   return (
//     <form onSubmit={onSub}>
//       <label htmlFor="name">Name</label>
//       <input type="text" id="name" onChange={oc} name="name" value={et.fn} />
//       <label htmlFor="password">Password</label>
//       <input
//         type="text"
//         id="password"
//         onChange={oc}
//         name="password"
//         value={et.pass}
//       />
//       <input type="submit" value="submit" onClick={sub} />

//       <p> Name: {et.fn}</p>
//       <em>Password: {et.pass}</em>
//     </form>
//   );
// }

// import React, { useState } from "react";

// export default function Demo() {
//   const [name, setName] = useState({
//     firstName: " ",
//     lastName: "",
//   });
//   functin setName(){

//   }

//   return (
//     <form>
//       <input
//         type="text"
//         onChange={(e) => setName({ ...name, firstName: e.target.value })}
//       />
//       <input
//         type="text"
//         onChange={(e) => setName({ ...name, lastName: e.target.value })}
//       />
//       <h2>Your first name is {name.firstName}</h2>
//       <h3>Your last name is {name.lastName}</h3>
//     </form>
//   );
// }

//Good example

import React from "react";
function Demo() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
  });
  // const [btn, setBtn] = React.useState({
  //   firstName: "",
  //   lastName: "",
  // });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  function submitForm() {
    // setBtn({ state });
    // console.log(state);
  }
  return (
    <>
      <form>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            // value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            // value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <input type="button" value="Submit" onClick={submitForm} />
      </form>
      <div className="output">
        {/* <h1>{btn.firstName}</h1>
        <p>{btn.lastName}</p> */}
        <h1>{state.firstName}</h1>
        <p>{state.lastName}</p>
      </div>
    </>
  );
}

export default Demo;
