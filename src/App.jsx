import Button from "./Button.jsx";
import FriendsList from "./FriendsList.jsx";
import AddFriendForm from "./AddFriendForm.jsx";
import SplitBillForm from "./SplitBillForm.jsx";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [show, setShow] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSplitForm = (value) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      })
    );
  };

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShow(false);
  };

  const handleFriendForm = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onClick={handleSelection}
          selectedFriend={selectedFriend}
        />
        {show && <AddFriendForm setFriends={setFriends} />}

        <Button onClick={handleFriendForm}>
          {show ? "close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          handleSplitForm={handleSplitForm}
        />
      )}
    </div>
  );
}

export default App;
// import Button from "./Button.jsx";
// import FriendsList from "./FriendsList.jsx";
// import AddFriendForm from "./AddFriendForm.jsx";
// import SplitBillForm from "./SplitBillForm.jsx";
// import { useState } from "react";
// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];
// function App() {
//   const [show, setShow] = useState(false);
//   const [friends, setFriends] = useState(initialFriends);
//   const [selectedFriend, setSelectedFriend] = useState(null);

//   const handleSelection = (friend) => {
//     setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
//     setShow(false);
//   };

//   const handleFriendForm = () => {
//     setShow((prev) => !prev);
//   };

//   return (
//     <div className="app">
//       <div className="sidebar">
//         <FriendsList
//           friends={friends}
//           onClick={handleSelection}
//           selectedFriend={selectedFriend}
//         />
//         {show && <AddFriendForm setFriends={setFriends} />}

//         <Button onClick={handleFriendForm}>
//           {show ? "close" : "Add Friend"}
//         </Button>
//       </div>

//       {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
//     </div>
//   );
// }

// export default App;
