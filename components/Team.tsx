'use client'

import chef1 from '../public/Team/chef1.jpg'
import chef2 from '../public/Team/chef2.jpg'
import chef3 from '../public/Team/chef3.jpg'
import chef4 from '../public/Team/chef4.jpg'
import chef5 from '../public/Team/chef5.jpg'
import Image, { StaticImageData } from 'next/image'
import ChefCard from './ChefCard'



interface TeamMember {
    name: string, 
    role: string, 
    bio: string, 
    photo?: any | StaticImageData
}


const Team = () => {

    const kurashikuTeam: TeamMember[] = [
          {
            name: "Hiroshi Tanaka",
            role: "Founder and Executive Chef",
            bio: "A Tokyo native, Chef Tanaka founded Kurashiku with a vision to bring authentic Japanese cuisine to New York. With years of experience and a Michelin star under his belt, he continues to influence the restaurant's culinary direction.", 
            photo: chef1
          },
          {
            name: "Aiko Nakamura",
            role: "Head Chef",
            bio: "A talented protege of Chef Tanaka, Aiko Nakamura now leads the kitchen at Kurashiku. She brings a fresh perspective and unwavering dedication to maintaining the restaurant's high standards of excellence.", 
            photo: chef2
          },
          {
            name: "Yuki Sato",
            role: "Sushi Chef",
            bio: "Yuki Sato is the master of sushi at Kurashiku. With a meticulous eye for detail and a deep understanding of traditional sushi techniques, he ensures that every piece of sushi is a work of art.", 
            photo: chef3
          },
          {
            name: "Mika Kimura",
            role: "Pastry Chef",
            bio: "Mika Kimura is the creative force behind Kurashiku's dessert menu. Her innovative and visually stunning creations provide the perfect sweet ending to the dining experience.", 
            photo: chef4
          },
          {
            name: "Takeshi Honda",
            role: "Sous Chef",
            bio: "Takeshi Honda assists the head chef in ensuring the smooth operation of the kitchen. His dedication and expertise are essential to maintaining the restaurant's high culinary standards.", 
            photo: chef5
          }
        ]


    return (
        <div>
            <h1>Our Team</h1>
            <div className='flex flex-col'>
                <div>
                    <Image 
                        src= {kurashikuTeam[0].photo}
                        alt='chef'
                        className='h-72 w-48 object-cover rounded-2xl'
                    /> 
                    <h3>{kurashikuTeam[0].name}</h3>
                    <p>{kurashikuTeam[0].role}</p>
                    <p>{kurashikuTeam[0].bio}</p>
                </div>
                <div className='flex flex-row'>
                    {kurashikuTeam.slice(1).map((chef) => {
                        return(
                            <ChefCard chef={chef} />
                            )
                        })}
                </div>
            </div>  
            <p>At Kurashiku, our team is the heart and soul of our culinary journey. Led by our visionary founder and Executive Chef, Hiroshi Tanaka, our kitchen is a place where tradition and innovation come together to create unforgettable dining experiences. Chef Tanaka's dedication to authentic Japanese cuisine and his years of experience have been instrumental in shaping our restaurant's identity. Working alongside him is our Head Chef, Aiko Nakamura, who brings a fresh perspective and unwavering commitment to maintaining the high standards of excellence set by Chef Tanaka. Our team also includes Yuki Sato, our Sushi Chef, whose meticulous eye for detail and deep knowledge of traditional sushi techniques ensure that every piece of sushi is a work of art. Mika Kimura, our Pastry Chef, adds her creative touch to our dessert menu, providing a sweet ending to your dining experience. And Takeshi Honda, our Sous Chef, plays a pivotal role in ensuring the smooth operation of our kitchen. Our staff is a dedicated and passionate group, committed to delivering an exceptional dining experience. From our servers to our kitchen team, we work together seamlessly to make your visit to Kurashiku unforgettable.</p>
        </div>
    )
}

export default Team 