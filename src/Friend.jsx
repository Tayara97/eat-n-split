import React from "react";
import Button from "./Button.jsx";
const Friend = ({ friend, onClick, showSplitForm, selectedFriend }) => {
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onClick(friend)}>
        {selectedFriend?.id === friend.id && showSplitForm ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
