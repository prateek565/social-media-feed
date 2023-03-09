import Image from 'next/image';
import React, { useState } from 'react';

const PostFeed = ({ author, content, imageUrl, videoUrl }) => {
  const [likes, setLikes] = useState(12);
  const [dislikes, setDislikes] = useState(1);
  var comments = [
    { id: "1",
      title: "John",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
    }, { id: "4",
      title: "William",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
    }, { id: "3",
      title: "Charlie",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
    }
  ];

  return (
    <div className="bg-white shadow-lg max-w-3xl rounded-lg overflow-hidden mb-8 p-4 flex flex-col">
      <div className="flex flex-col items-center">
        {imageUrl && <Image width={384} height={386}  className="w-96 h-[23rem] " src={imageUrl} alt="post image" />}

        {videoUrl && <video className="w-96 h-[23rem] items-center" src={videoUrl} controls />}

      </div>
      <div className="flex ">
        <Image width={40} height={40} alt="profilepic" className="w-10 h-10 bg-gray-300 rounded-full mt-4  " src="/2.jpg"/>
        <div >
          <div className=" flex flex-row">
            <div className=" text-xl  text-blue-600  p-4">{author}</div>

            <div className="flex  p-4">
              <i className="fa-solid fa-thumbs-up p-1"></i>
              <button className="text-gray-500 hover:text-blue-500" >
                {likes} likes
              </button>
              <i className="fa-regular fa-thumbs-down p-1"></i>
              <button className="text-gray-500 hover:text-blue-500" >
                {dislikes} Dislikes
              </button>
            </div>
          </div>
          <div className='mb-1'>Updated 3 mins ago</div>
          <hr />
          <div className='text-gray-900' >{content}</div>
          <hr className='mb-3' />
          <div >
            {comments.map((comment) => (
              <div className=" flex px-4 py-2 mb-2" key={comment.id}>
                  <Image width={40} height={40} alt="profilepic"className="w-10 h-10 bg-gray-300 rounded-full  " src={`/${comment.id}.jpg`}/>
                  <div className='text-base'><span className="  text-blue-600 px-2">{comment.title}</span>
                  {comment.data}</div>  
              </div>
            ))}
          </div>

          <div className=" flex px-4 py-2 mb-2">
                  <Image width={40} height={40} alt="profilepic" className="w-10 h-10 bg-gray-300 rounded-full  " src="/5.jpg"/>
                  
                  
                <div className="m-1 p-2 bg-gray-200 w-[20rem] text-[#8f8f8f]   rounded-lg  ">Post a Comment </div> 
              </div>

        </div>
      </div>

    </div>
  );
};

export default PostFeed;
