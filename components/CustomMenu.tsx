import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Image from 'next/image';

type Props = {
    title: string;
    filter: Array<string>;
    state: string;
    setState: (value: string) => void;


}
const CustomMenu = ({ title, state, setState, filter }: Props) => {
    return (
        <div className='flex justify-start flex-col items-start w-full gap-7 relative'>
            <label htmlFor={title} className='w-full text-gray-100'>
                {title}
            </label>
            <Menu as='div' className='self-start relative'>
                <div>
                    <Menu.Button
                        className='flex items-center justify-center gap-4 w-full rounded-md bg-light-white-100 p-4 text-base outline-none capitalize'>
                        {state || 'Select a Category'}
                        <Image
                            src='/arrow-down.svg'
                            width={10}
                            height={5}
                            alt='arrow down'
                        />
                    </Menu.Button>
                </div>

            </Menu>
        </div>
    )
}

export default CustomMenu