import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [doc, setDoc] = useState({ isOnline: false });
  useEffect(() => {
    fetch(import.meta.env.VITE_API + "api")
      .then((res) => res.json())
      .then((data) => {
        setDoc(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleForm = (e) => {
    // handle form submit
    e.preventDefault();
    console.log(import.meta.env.VITE_API);
    fetch(import.meta.env.VITE_API + "api", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setDoc(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2em",
        background: doc.isOnline ? "lime" : "grey",
      }}
    >
      Vlad is {doc.isOnline ? "online" : "offline"}
      <form onSubmit={handleForm} method="post">
        <button type="submit">go {doc.isOnline ? "offline" : "online"}</button>
      </form>
      <p>
        Is Vlad online? is a simple app that uses a MERN stack to check if Vlad
        is online or offline. The front end is built with React and the back end
        is built with Node.js and Express. The app is deployed on Railway and
        MongoDB Atlas.
        <a href="https://predavladc.github.io/portfolio/">Portfolio</a>
        <a href="https://github.com/predavladc/VladisOnline">Front End</a>
        <a href="https://github.com/predavladc/mern-server">Back End</a>
      </p>
    </div>
  );
}

export default App;
