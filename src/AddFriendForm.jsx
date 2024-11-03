import { useRef, useState } from "react";

const AddFriendForm = ({ setFriends }) => {
  const [imgRef, setImgRef] = useState("https://i.pravatar.cc/48");
  const nameRef = useRef();
  // const imgRef = useRef();
  function addFriend(e) {
    e.preventDefault();
    let refNameVal = nameRef.current.value;
    let ImgVal = imgRef;
    if (!refNameVal || !imgRef) return;

    setFriends((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: refNameVal,
        image: imgRef,
        balance: 0,
      },
    ]);
    nameRef.current.value = "";
    setImgRef("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={addFriend}>
      <label>Friend Name</label>
      <input type="text" ref={nameRef} />

      <label>Image Url</label>
      <input
        type="text"
        value={imgRef}
        onChange={(e) => setImgRef(e.target.value)}
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};
export default AddFriendForm;
