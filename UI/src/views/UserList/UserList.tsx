import { useState } from "react";

interface User {
    id: string;
    name: string;
    job: string;
    avatar: string;
    tags: string[];
}

const users: User[] = [
    {
        id: 'user1',
        name: 'John Doe',
        job: 'Software Engineer',
        avatar: 'https://placewaifu.com/image/100',
        tags: ['react', 'nodejs']
    },
    {
        id: 'user2',
        name: 'Jane Smith',
        job: 'Designer',
        avatar: 'https://placewaifu.com/image/200',
        tags: ['ui', 'ux', 'figma']
    },
    {
        id: 'user3',
        name: 'Alice Johnson',
        job: 'Data Scientist',
        avatar: 'https://placewaifu.com/image/300',
        tags: ['python', 'data analysis']
    },
    {
        id: 'user4',
        name: 'Bob Brown',
        job: 'Marketing Specialist',
        avatar: 'https://placewaifu.com/image/400',
        tags: ['digital marketing', 'seo']
    },
    {
        id: 'user5',
        name: 'Charlie Chen',
        job: 'Product Manager',
        avatar: 'https://placewaifu.com/image/700',
        tags: ['agile', 'scrum']
    },
    {
        id: 'user6',
        name: 'David Davis',
        job: 'Sales Representative',
        avatar: 'https://placewaifu.com/image/600',
        tags: ['sales', 'negotiation']
    }
];

export const UserList = () => {
    const filters = ["Reputation", "New Users", "Voters", "Editors", "Moderators"]
    const [query, setQuery] = useState('')
    const filteredUsers = 
    query.length > 0
        ?   users.filter(user => {
                return user.name.toLowerCase().includes(query.toLowerCase())
            })
        :   users;
    return (  
        <div className="min-w-[40rem] bg-white rounded-lg p-16 shadow">
            <h1 className="text-3xl font-black">Users</h1>

            <div className="mt-6 flex flex-col gap-4 md:flex-row">
                <div>
                    <div className="relative grow rounded-md border-2 border-gray-400 overflow-hidden">
                        <input type="text" 
                            value={query}
                            onChange={(x) => setQuery(x.target.value)} 
                            className="mr-2 w-full px-4 py-3 pl-10"
                            placeholder="Search users"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>

                <div className="space-x-2">
                    {filters.map((filter) => (
                        <a className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:bg-[#849FFF] hover:text-white">
                            {filter}
                        </a>
                    ))}
                </div>   
            </div>

            <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredUsers.map((user) => (
                        <div key={user.id} className="flex rounded-xl gap-x-4 cursor-pointer bg-[#FBFCFF] p-6 hover:border-[1px] hovere:border-[#BFC8E5] hover:shadow-lg">
                            <img src={user.avatar} className="size-24 rounded-full" alt=""/>
                            <div>
                                <h3 className="font-bold">{user.name}</h3>
                                <p className="text-sm">{user.job}</p>
                                <div className="mt-4 space-x-2">
                                    {user.tags.map((tag) => (
                                        <span 
                                            className="inline-block px-2 rounded-full border-[1px] border-slate-500 text-xs text-[#516FD4]" 
                                            key={tag}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}