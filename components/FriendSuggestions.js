
import React from "react";
import Link from "next/link";
import FollowButton from "./FollowButton";
import Image from "next/image";
export default function FriendSuggestions({ onAddFriend, onProfileClick }) {
  const friends = [
    { id: 1, name: "John Doe", added: false },
    { id: 2, name: "Thanh Darcus", added: false },
    { id: 3, name: "Jeffery Stamant", added: false },
    { id: 4, name: "Burl Rymar", added: false },
  ];
  
  const handleAddFriendClick = (friend) => {
   friend.added= !friend.added;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex-shrink-0 h-[531px] mt-4 lg:ml-4">
    <h2 className="text-2xl font-bold mb-4">Who To Follow</h2>
    <ul>
  {friends.map((friend) => (
    <li className="flex items-center justify-between mb-4" key={friend.id}>
    <div className="flex items-center">
      <Image width={40} height={40} alt="profilepic" className="w-10 h-10 bg-gray-300 rounded-full mr-4"  src= {`/${friend.id}.jpg`}/>
      <div>
        <Link href={`/people/${friend.id}`}><h3 className="">{friend.name}</h3></Link>
      </div>
    </div>
    
    <FollowButton/>
  </li>
  ))}
    </ul>
    
  </div>

  );
}
