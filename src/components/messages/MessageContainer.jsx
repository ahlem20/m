import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages, TiVideo, TiThMenu } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import Sidebar from "./sidebar/Sidebar"; // Import the Sidebar component

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        // Cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='flex'>
        
            <div className='md:min-w-[450px] flex flex-col flex-grow'>
                {/* Button to toggle sidebar visibility */}
               
                {!selectedConversation ? (
                    <NoChatSelected />
                ) : (
                    <>
                         {/* Header */}
                        <div className='bg-slate-500 px-4 py-2 mb-2 flex items-center justify-between'>
                            <div>
                                <span className='label-text'>To:</span>
                                <span className='text-gray-900 font-bold ml-2'>{selectedConversation.fullName}</span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <TiVideo className='text-gray-900 text-2xl' />
                                <TiThMenu className='text-gray-900 text-2xl' onClick={toggleSidebar} />
                            </div>
                        </div>
                        <Messages />
                        <MessageInput />
                    </>
                )}
            </div>
			    {/* Sidebar */}
				{isSidebarVisible && <Sidebar />}

        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
