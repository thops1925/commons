"use client"
import { SessionInterface } from "@/common"

type Props = {
    type: string,
    session: SessionInterface
}

const ProjectForm = ({ type, session }: Props) => {
    const image = null
    const handleFormSub = (e: React.FormEvent) => { }
    return (
        <form onSubmit={handleFormSub} className="w-full outline-0 bg-light-white-100 rounded-xl p-4 flex items-start justify-start">
            <div className="flex items-start justify-start w-full lg:min-h-[400px] min-h-[200px] relative">
                <label htmlFor="poster" className="flex justify-center items-center">{!image && 'Choose a cover for your project'}</label>
            </div>
        </form>
    )
}

export default ProjectForm