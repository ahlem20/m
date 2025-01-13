import { useState, useEffect } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from '../../context/AuthContext';
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (search.length === 0) return;

		if (search.length < 3) {
			toast.error("Search term must be at least 3 characters long");
			return;
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("No such user found!");
		}
	}, [search, conversations, setSelectedConversation]);

	

	return (
		<div className='relative'>
			<form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-2'>
				
				<input
					type='text'
					placeholder='Search…'
					className='input input-bordered rounded-full'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
			
		</div>
	);
};

export default SearchInput;
