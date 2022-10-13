import React, { useEffect, useState } from "react";
import FromLabel from "./components/FromLabel";

export default function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <FromLabel />
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}> {user}</p>)
      )}
    </>
  );
}
