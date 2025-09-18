import { use } from "react";
import Friend from "./friend";

export default function Friends({ fetchFriends }) {
  const friends = use(fetchFriends);

  return (
    <div className="card">
      <h1> Friends: {friends.length}</h1>
      {
        friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>) 
      }
    </div>
  );
}
