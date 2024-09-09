import { ReactNode } from "react";

export interface JobProps {
    title: string;
    icon: ReactNode;
    bgColor: string;
}

export const Job: React.FC<JobProps> = ({title, icon, bgColor} : JobProps) => {
    return (
        <div className={`${bgColor} p-4 flex flex-col aspect-square justify-center items-center rounded-lg drop-shadow-md outline outline-white hover:outline-offset-2`}>
            {icon}
            <p className="pt-2">{title}</p>
        </div>
    );
};