import { ReactNode } from "react";

interface Choice {
    logo: ReactNode;
    title: string;
    subtitle: string;
    price: number;
    shadowClass: string;
}

const choices:  Choice[] = [
    {
        title: "Ice Mobile 10GB",
        subtitle: "Up to 100Mbit/s",
        price: 299,
        shadowClass: "shadow-[-1.5rem_-1.5rem_0_0_#fff8ec]",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
        ),
    },
    {
        title: "Telia Mobile 15GB",
        subtitle: "Unlimited calls, SMS and MMS",
        price: 953,
        shadowClass: "shadow-[-1.5rem_-1.5rem_0_0_#F9ECFF]",
        logo: (
            <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#c334eb"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#c334eb"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#c334eb"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#c334eb"></path> </svg>
        ),
    },
    {
        title: "Telenor Next Fast",
        subtitle: "Up to 100Mbit/s",
        price: 1028,
        shadowClass: "shadow-[-1.5rem_-1.5rem_0_0_#ECEEFF]",
        logo: (
            <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg>
        ),
    },
]

export const Subscriptions = () => {
    return (  
        <div className="space-y-14 bg-[#F4F5FA] rounded-3xl p-20">
            <div>
                <h1 className="text-center text-3xl font-black [text-wrap:balance]">
                    Get the most out of your mobile with the right subscription
                </h1>
                <p  className="mt-6 text-center text-lg [text-wrap:balance]">
                All devices come with free delivery or pickup as standard. See information on available shopping options for your location.
                </p>
            </div>

            <div className="grid grid-cols-1 text-center lg:grid-cols-3 gap-20">
                {choices.map((choice) => (
                    <div className={`p-10 rounded-xl bg-white ${choice.shadowClass}`}>
                        <div className="flex justify-center items-center">{choice.logo}</div>
                        <h3 className="mt-4 text-lg font-semibold">{choice.title}</h3>
                        <p className="text-sm">{choice.subtitle}</p>
                        <div className="block mt-4 mx-auto items-center">
                            <span className="text-2xl font-bold">{choice.price},-</span>
                            <span className="text-sm">/month</span>
                        </div>
                        <button className="block rounded-full mt-10 mx-auto px-6 py-4 shadow-[0_4px_0_0_#E7E7FB;] pxborder-[1px] border-[#F0F5F6] bg-[#F4F5FA]">
                            Add subscription
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button className="items-center rounded-full bg-[#171435] text-white p-4 py-3">
                    See all subscriptions
                </button>
            </div>
        </div>
    )
}
// 1:28:00