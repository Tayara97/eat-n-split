import React from "react";
import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ setFriends, setShowAddFriendForm }) => {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setImgInput] = useState("https://i.pravatar.cc/48");

  return (
    <form
      className="form-add-friend"
      onSubmit={(e) => {
        e.preventDefault();
        if (!nameInput || !imgInput) return;
        let id = crypto.randomUUID();
        const newFriend = {
          id: id,
          name: nameInput,
          image: `https://i.pravatar.cc/48?u=${id}`,
          balance: 0,
        };
        setFriends((prev) => {
          return [...prev, newFriend];
        });
        setNameInput("");
        setImgInput("https://i.pravatar.cc/48");
        setShowAddFriendForm(false);
      }}
    >
      <label htmlFor="name">Friend Name</label>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <label htmlFor="image">Image Url</label>
      <input
        type="text"
        value={imgInput}
        onChange={(e) => setImgInput(e.target.value)}
      />
      <Button>add</Button>
    </form>
  );
};

export default AddFriendForm;
