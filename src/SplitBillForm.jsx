import { useState } from "react";
import Button from "./Button.jsx";
const SplitBillForm = ({ selectedFriend, handleSplitForm }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByfriend = bill - paidByUser;
  const [whoIsPaing, setWhoIsPaying] = useState("user");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    if (whoIsPaing === "user") {
      handleSplitForm(paidByfriend);
    } else {
      handleSplitForm(-paidByUser);
    }
    setBill("");
    setPaidByUser("");
  };
  return (
    <form className="form-split-bill" onSubmit={onSubmitForm}>
      <h2>Split the bill with {selectedFriend.name} </h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>My Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s Value</label>
      <input type="text" disabled value={paidByfriend} />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaing}
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
