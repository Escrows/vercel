import React, { useState, useEffect, useRef } from "react";
import socket from "../utils/socket";

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");
  };


  return (
    <div>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
                    <div className="message">
                    <a
                className="bold"
                href={`https://etherscan.io/address/${nombre}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
            <div className="name">{e.nombre}</div>
            </a>
            <div>{e.mensaje}</div>
            </div>

          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit}>
        <input
          name=""
          id=""
          placeholder="Type your message here!"
          cols="30"
          rows="10"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Chat;