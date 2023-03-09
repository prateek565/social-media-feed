import Head from "next/head"
import Script from "next/script"
import FriendSuggestions from "../components/FriendSuggestions"
import UserProfile from "../components/UserProfile"
import styles from "../styles/Home.module.css"
import PostFeed from "../components/PostFeed"

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Social Media Feed</title>
        <meta name="description" content="My Social Media Feed" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Script src="https://kit.fontawesome.com/2a54d77201.js" crossorigin="anonymous"/>
      <main className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="bg-white max-w-sm shadow-lg rounded-lg p-4 flex-shrink-0 h-[531px] lg:mr-4 mt-4 mb-4 lg:mb-0">
              <div className=" mt-4">
                <UserProfile/>
              </div>
            </div>
            <div className="flex flex-col mt-4">
            <PostFeed author="Elon Marx"  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}  imageUrl="/1.jpg"/>
            <PostFeed author="Jeff Bezos"  content={"ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}  videoUrl="/samplevid.mp4"/>
            </div>
            <FriendSuggestions/>
          </div>
        </div>
      </main>      
    </div>
    )};


