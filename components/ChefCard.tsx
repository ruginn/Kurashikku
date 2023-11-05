import Image, { StaticImageData } from "next/image"

interface TeamMember {
    name: string, 
    role: string, 
    bio: string, 
    photo?: any | StaticImageData
}


const ChefCard = ({chef} : {chef:TeamMember} ) => {
    return (
        <div className="flex flex-col justify-center items-center m-8">
            <Image 
                src= {chef.photo}
                alt='chef'
                className='h-72 w-48 object-cover rounded-2xl'
            /> 
            <h3>{chef.name}</h3>
            <p>{chef.role}</p>
            <p className="text-center">{chef.bio}</p>
        </div>
    )
}

export default ChefCard