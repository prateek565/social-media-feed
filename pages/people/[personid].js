import { useRouter } from 'next/router'
import ProfilePage from '../../components/ProfilePage'
import UserProfile from '../../components/UserProfile'
import PostFeed from '../../components/PostFeed'
const People = () => {
    const router = useRouter()
    const id = router.query.personid ||1
    const friends = [
        { id: 1, name: "John Doe", added: false },
        { id: 2, name: "Thanh Darcus", added: false },
        { id: 3, name: "Jeffery Stamant", added: false },
        { id: 4, name: "Burl Rymar", added: false },
      ];
      const c=friends[id-1];
    return (
        <>
        <ProfilePage coverPhoto="/cover.jpeg" bio="hey there this is bio" name={c.name} profilePhoto={`/${c.id}.jpg`} />
        <div className="flex flex-col lg:flex-row">
            <div className="bg-white max-w-sm shadow-lg rounded-lg p-4 flex-shrink-0 h-[531px] lg:mr-4 mb-4 lg:mb-0">
              <div className=" mt-4">
                <UserProfile/>
              </div>
            </div>
            <div className="flex flex-col">
            <PostFeed author="Elon Marx"  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}  imageUrl="/1.jpg"/>
             </div>
          
          </div>
        

        </>

    )
}

export default People