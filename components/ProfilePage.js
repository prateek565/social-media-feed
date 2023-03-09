import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FollowButton from "./FollowButton"
// import { Avatar } from '@material-ui/core';
// import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const ProfilePage = ({ coverPhoto, profilePhoto, name, bio }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg mb-4">
            <Image width={600} height={400}  src={coverPhoto} alt="Cover" className="w-full h-[18rem] object-cover rounded-t-lg" />
            <div className="flex items-center justify-center -mt-[6.5rem]   w-full">
                <nav className="flex items-center   bg-black/75  w-full   text-white p-4">
                    <div className="flex items-center ml-96">
                        <Link href="/timeline">
                            <span className="mx-4">Timeline</span>
                        </Link>
                        <Link href="/about">
                            <span className="mx-4">About</span>
                        </Link>
                        <Link href="/album">
                            <span className="mx-4">Album</span>
                        </Link>
                        <Link href="/friends">
                            <span className="mx-4">Friends</span>
                        </Link>
                        <div className='ml-[15rem]'>
                            <span className="mx-4">1,299 people following </span>
                            <FollowButton />
                        </div>

                    </div>
                </nav></div>
            <div className="flex items-center ml-[9rem] -mt-[6.5rem]">
                <Image width={128} height={128} alt="profilepic" src={profilePhoto}  className="w-32 h-32 rounded-full border-4 border-white" />
            </div>

            <div className="p-4">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-gray-500 mb-4">{bio}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
