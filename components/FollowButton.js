import { useState } from 'react';

const FollowButton = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowClick = () => {
    setIsFollowed(true);
  };

  const handleUnfollowClick = () => {
    setIsFollowed(false);
  };

  return (
    <button
      className={`px-4 py-2 rounded-full ${isFollowed ? 'bg-gray-300 text-gray-500 cursor-default' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      onClick={isFollowed ? handleUnfollowClick : handleFollowClick}
    >
      {isFollowed ? 'Followed' : 'Follow'}
    </button>
  );
};

export default FollowButton;
