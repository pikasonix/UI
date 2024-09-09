export const Collections = () => {
    const tags = ["Profile", "Japan", "Relax", "Pika", "Anime"]

    return (  
        <div className="w-full bg-[#EFF0F1] rounded-lg p-16 shadow-lg">
            <h1 className="text-3xl font-bold">Popular Collections</h1>

            <div className="mt-6 space-x-2">
                {tags.map((tag) => (
                    <a className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:text-blue-600" id={tag}>{tag}</a>
                ))}
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white p-6">
                    <div>
                        <img 
                            src="https://placewaifu.com/image/100"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img 
                            src="https://placewaifu.com/image/200"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/300"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/400"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="flex pt-6">
                        <p  className="grow text-xl font-medium">People</p>
                        <p  className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
                {/* ------ */}
                <div className="rounded-2xl bg-white p-6">
                    <div>
                        <img 
                            src="https://placewaifu.com/image/100"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img 
                            src="https://placewaifu.com/image/200"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/300"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/400"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="flex pt-6">
                        <p  className="grow text-xl font-medium">People</p>
                        <p  className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
                {/* ------ */}
                <div className="rounded-2xl bg-white p-6">
                    <div>
                        <img 
                            src="https://placewaifu.com/image/100"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img 
                            src="https://placewaifu.com/image/200"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/300"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/400"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="flex pt-6">
                        <p  className="grow text-xl font-medium">People</p>
                        <p  className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
                {/* ------ */}
                <div className="rounded-2xl bg-white p-6">
                    <div>
                        <img 
                            src="https://placewaifu.com/image/100"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img 
                            src="https://placewaifu.com/image/200"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/300"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                        <img 
                            src="https://placewaifu.com/image/400"
                            className="aspect-video w-full rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="flex pt-6">
                        <p  className="grow text-xl font-medium">People</p>
                        <p  className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
                {/* ------ */}
            </div>
        </div>
    );
}