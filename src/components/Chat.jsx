import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { auth, db } from "../firebase";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import SendForm from "./SendForm";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then((data) => {
        const tempMessage = [];
        data.forEach((msg) => tempMessage.push(msg.data()));
        setMessages(tempMessage);
      })
      .catch((err) => console.error(err));
  }, []);

  const getMessages = async () => {
    return await getDocs(
      query(collection(db, "messages"), orderBy("createdAt"), limit(50))
    );
  };

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.length === 0
          ? "Loading ..."
          : messages.map(({ id, text, photoURL, uid }) => (
              <div>
                <div
                  key={id}
                  className={`msg ${
                    uid == auth.currentUser.uid ? "sent" : "received"
                  }`}
                >
                  <img src={photoURL} alt="profile" />
                  <p>{text}</p>
                </div>
              </div>
            ))}
      </div>
      <SendForm />
    </div>
  );
};

export default Chat;
