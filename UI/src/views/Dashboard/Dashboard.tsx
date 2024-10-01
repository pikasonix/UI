import { useNavigate } from "react-router-dom";
import { useState } from "react";

const pages = [
    { 
        name: "UserProfile", 
        description: "User profile management page", 
        path: "/user-profile", 
    },
    { 
        name: "JobList", 
        description: "Page displaying list of jobs", 
        path: "/job-list",
    },
    { 
        name: "Collections", 
        description: "Page showing user collections", 
        path: "/collections", 
    },
    { 
        name: "ReviewForm", 
        description: "Form to submit reviews", 
        path: "/review-form", 
    },
    { 
        name: "UserList", 
        description: "Page showing list of users", 
        path: "/user-list", 
    },
    { 
        name: "Notification", 
        description: "Page for managing notifications", 
        path: "/notification", 
    },
    { 
        name: "Subscriptions", 
        description: "Page for managing subscriptions", 
        path: "/subscriptions", 
    },
    { 
        name: "JobPositions", 
        description: "Page displaying job positions", 
        path: "/job-positions", 
    },
    { 
        name: "AccountList", 
        description: "Page showing list of accounts", 
        path: "/account-list", 
    },
];

export const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
        navigate(path);
    };

    const [query, setQuery] = useState('')
    const filteredPages = 
    query.length > 0
        ?   pages.filter(page => {
                return page.name.toLowerCase().includes(query.toLowerCase())
            })
        :   pages;
    return ( 
        <div className="w-[60rem] bg-white rounded-xl p-24">
            <div className="flex items-center">
                <div>
                    <div className="relative grow rounded-md border-2 border-gray-400 overflow-hidden">
                        <input type="text" 
                            value={query}
                            onChange={(x) => setQuery(x.target.value)} 
                            className="mr-2 w-full px-4 py-3 pl-10"
                            placeholder="Search page"
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

                <div className="flex items-center ml-auto">
                    <button className="inline-flex size-16 items-center justify-center rounded-full p-2 text-[#0C0E41] hover:text-white hover:bg-[#0C0E41]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>

                    <button className="rounded-full size-16 p-2 bg-[#0C0E41] text-white">
                        <span className="text-2xl">PI</span>
                    </button>
                </div>
            </div>

            <h1 className="pt-10 text-2xl font-bold">Dashboard</h1>
            <div className="mt-7 w-full">
                {filteredPages.map((page) => (
                    <div
                        key={page.name}
                        className="flex cursor-pointer rounded-3xl justify-between items-center p-5 hover:bg-[#FAF2FE]"
                        onClick={() => handleClick(page.path)}
                    >
                        <div className="flex items-center gap-x-4">
                            <div>
                                <h2 className="text-2xl font-bold">{page.name}</h2>
                                <p>{page.description}</p>
                            </div>
                        </div>
                       
                        <button className="flex size-10 justify-center items-center rounded-full bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}