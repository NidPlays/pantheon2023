import React from 'react';
import Img1 from '../assets/heads/1.webp';
import Img2 from '../assets/heads/2.webp';
import Img3 from '../assets/heads/3.webp';
import Img4 from '../assets/heads/4.webp';
import Img5 from '../assets/heads/5.webp';
import Img6 from '../assets/heads/6.webp';
import Img7 from '../assets/heads/7.webp';
import Img8 from '../assets/heads/8.webp';
import Img9 from '../assets/heads/9.webp';
import Img10 from '../assets/heads/10.webp';
import Img11 from '../assets/heads/11.webp';
import Img12 from '../assets/heads/12.webp';
import Img13 from '../assets/heads/13.webp';
import Img14 from '../assets/heads/14.webp';
import Img15 from '../assets/heads/15.webp';
import Img16 from '../assets/heads/16.webp';
import Img17 from '../assets/heads/17.webp';



const Team = () => {
    const teamMembers = [
        {
            name: 'Akshay S',
            designation: 'Cultural Secretary',
            image: Img1,
        },
        {
            name: 'Akshay Sateesh',
            designation: 'DMC',
            image: Img2,
        },
        {
            name: 'Bharath BM',
            designation: 'Accounts',
            image: Img3,
        },
        {
            name: 'Gagandeep HR',
            designation: 'Logistics',
            image: Img4,
        },
        {
            name: 'Gandhana',
            designation: 'Deco',
            image: Img5,
        },
        {
            name: "Jayanth K",
            designation: 'DMC',
            image: Img6,
        },
        {
            name: "karunya P",
            designation: 'Culural Secretary',
            image: Img7,
        },
        {
            name: "Kaushik Krishna",
            designation: 'Deco',
            image: Img8,
        },
        {
            name: "Kshama Iyer",
            designation: 'Content',
            image: Img9,
        },
        {
            name: "Mohammed Mujtahid",
            designation: 'Sponsorship',
            image: Img10,
        },
        {
            name: "Manish MV",
            designation: 'Events',
            image: Img11,
        },
        {
            name: "Prajwal S",
            designation: 'Events',
            image: Img12,
        },
        {
            name: "Prathik S",
            designation: 'Logistics',
            image: Img13,
        },
        {
            name: "Rohan S Bharadwaj",
            designation: 'Sponsorship',
            image: Img14,
        },
        {
            name: "Shreya SB",
            designation: 'PVC',
            image: Img15,
        },
        {
            name: "Subramanya M Rao",
            designation: 'DMC',
            image: Img16,
        },
        {
            name: "Sujay Karanth",
            designation: 'PVC',
            image: Img17,
        },
    ];

    return (
        <div>
            <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight gold-text">Our team</h2>
                    <p className="mt-1 text-gray-400">Committee Heads</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <div className="text-center" key={index}>
                            <img className="rounded-full w-24 h-24 mx-auto" src={member.image} alt="Image Description" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-200 ">{member.name}</h3>
                                <p className="text-sm text-gray-400">{member.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
