import { useState } from "react";
import Friend from "./Friend.jsx";
import AddFriendForm from "./AddFriendForm.jsx";
import Button from "./Button.jsx";
import SplitBillForm from "./SplitBillForm.jsx";

const initialFriends = [
  {
    id: 118836,
    name: "Ahmed",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "mahmoud",
    image: "https://i.pravatar.cc/48?u=93334Z72",
    balance: 20,
  },
  {
    id: 499476,
    name: "Mohamed",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showSplitForm, setShowSplitForm] = useState(false);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowSplitForm = (friend) => {
    setSelectedFriend(friend);
    setShowSplitForm((prev) => {
      return selectedFriend?.id === friend.id ? !prev : true;
    });
    setShowAddFriendForm(false);
  };

  const handleAddFriend = () => {
    setShowAddFriendForm((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="friends-list">
          {friends.map((friend) => {
            return (
              <Friend
                key={friend.id}
                friend={friend}
                onClick={handleShowSplitForm}
                showSplitForm={showSplitForm}
                selectedFriend={selectedFriend}
              />
            );
          })}
        </ul>
        {showAddFriendForm && (
          <AddFriendForm
            setFriends={setFriends}
            setShowAddFriendForm={setShowAddFriendForm}
          />
        )}
        <Button onClick={handleAddFriend}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {showSplitForm && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          setFriends={setFriends}
          setShowSplitForm={setShowSplitForm}
        />
      )}
    </div>
  );
}
export default App;
