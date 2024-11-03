import Friend from "./Friend.jsx";

const FriendsList = ({ friends, onClick, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend, index) => {
        return (
          <Friend
            key={index}
            friend={friend}
            onClick={onClick}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
