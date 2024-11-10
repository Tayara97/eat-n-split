import React, { useState } from "react";
import Button from "./Button.jsx";

const SplitBillForm = ({ setFriends, selectedFriend, setShowSplitForm }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill - paidByUser;
  const [whoisPaying, setWhoIsPaying] = useState("user");
  const [error, setError] = useState(false);
  console.log(error);
  const handleSplitForm = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) {
      setError(true);
      return;
    }
    if (paidByUser > bill) {
      alert("Your expense can't exceed the bill value!");
      return;
    }
    if (whoisPaying === "user") {
      setFriends((prev) => {
        return prev.map((friend) => {
          return friend.id === selectedFriend?.id
            ? { ...friend, balance: friend.balance + paidByFriend }
            : friend;
        });
      });
    } else {
      setFriends((prev) => {
        return prev.map((friend) => {
          return friend.id === selectedFriend?.id
            ? { ...friend, balance: friend.balance + -paidByUser }
            : friend;
        });
      });
    }
    setShowSplitForm(false);
  };
  return (
    <form className="form-split-bill" onSubmit={(e) => handleSplitForm(e)}>
      <h2>Split form with {selectedFriend.name}</h2>
      <label htmlFor="">
        Bill Value
        {error && !bill ? (
          <span className="error">{`This field can't be empty`}</span>
        ) : (
          ""
        )}
      </label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Math.abs(e.target.value))}
      />

      <label htmlFor="">
        My Expense
        {error && !paidByUser ? (
          <span className="error">{`This field can't be empty`}</span>
        ) : (
          ""
        )}
      </label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) => {
          return setPaidByUser(
            e.target.value > bill ? bill : Math.abs(e.target.value)
          );
        }}
      />

      <label htmlFor="">Friend's Value</label>
      <input type="number" disabled value={paidByFriend} />
      <label htmlFor="">Who is paying the bill</label>
      <select
        value={whoisPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default SplitBillForm;
