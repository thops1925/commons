"use client"
import { SessionInterface } from "@/common"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import FormField from "./FormField"
import Button from "./Button"
import CustomMenu from "./CustomMenu"
import { categoryFilters } from "@/constant"
import { createNewProject, fetchToken } from "@/lib/actions"
import { useRouter } from "next/navigation"

type Props = {
    type: string,
    session: SessionInterface
}


const ProjectForm = ({ type, session }: Props) => {
    const router = useRouter()
    const [isSubmitting, setSubitting] = useState(false)
    const [form, setForm] = useState({
        image: '',
        title: '',
        description: '',
        liveSiteUrl: '',
        githubUrl: '',
        category: ''

    })
    const handleFormSub = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubitting(true);
        const { token } = await fetchToken()
        try {
            if (type === 'create') {
                await createNewProject(form, session?.user?.id, token)
                router.push('/')
            }
        } catch (error) {
            console.log(error)

        }
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0]
        if (!file) return;
        if (!file.type.includes('image')) return alert("Please upload an image file")
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result as string;
            handleStateChange('image', result)
        }
    }
    const handleStateChange = (fieldName: string, value: string) => {
        setForm((prev) =>
        ({
            ...prev, [fieldName]: value
        }))
    }

    return (
        <form onSubmit={handleFormSub} className=" flex-col w-full lg:pt-24 pt-12 gap-10 text-lg max-w-5xl mx-auto flex items-start justify-start">
            <div className="flex items-start justify-start  w-full lg:min-h-[400px] min-h-[200px] relative">
                <label htmlFor="poster" className="flex justify-center items-center z-10 text-center w-full h-full p-20 text-gray-100 border-2 border-gray-50 border-dashed">{!form.image && 'Choose a cover for your project'}</label>
                <input type="file" id="image" accept="image/*" required={type === 'create'} className=" absolute z-30 w-full opacity-0 h-full cursor-pointer" onChange={handleChangeImage} />
                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20 "
                        alt="prod"
                        fill
                    />
                )}
            </div>
            <FormField title="Title" state={form.title} placeholder='Project' setState={(value) => handleStateChange('title', value)} />
            <FormField title="Description" state={form.description} placeholder='Description' setState={(value) => handleStateChange('description', value)} />
            <FormField type="url" title="Website URL" state={form.liveSiteUrl} placeholder='https://christopherlumenportfolio.vercel.app/' setState={(value) => handleStateChange('liveSiteUrl', value)} />
            <FormField type="url" title="GitHub" state={form.githubUrl} placeholder='http://github.com' setState={(value) => handleStateChange('githubUrl', value)} />
            <CustomMenu
                title='Category'
                state={form.category}
                filter={categoryFilters}
                setState={(value) => handleStateChange('category', value)}
            />
            <Button
                title={isSubmitting ?
                    `${type === 'create' ? 'Creating' : 'Editing'}`
                    : `${type === 'create' ? 'Create ' : 'Edit'}`}
                type="submit"
                leftIcon={isSubmitting ? '' : '/plus.svg'}
                submitting={isSubmitting} />
        </form>
    )
}

export default ProjectForm