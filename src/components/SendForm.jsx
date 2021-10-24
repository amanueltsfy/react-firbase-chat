import { Input, Button } from "@material-ui/core";
import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const SendForm = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: message,
      photoURL: photoURL,
      uid: uid,
      createdAt: Timestamp.now(),
    });

    setMessage("");
  };

  return (
    <form onSubmit={sendMessage}>
      <div className="sendMsg">
        <Input
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          placeholder="Message..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          style={{
            width: "18%",
            fontSize: "15px",
            fontWeight: "550",
            margin: "4px 5% -13px 5%",
            maxWidth: "200px",
          }}
          type="submit"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default SendForm;
