import React from 'react'
import '../../../components/styles/Donation.css'
import { MdOutlineFilterAlt } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";
import { BiShareAlt } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";

import demo from "../../../assets/Chioma.jpg"

const Donations = () => {
   
  const dataSet = [
    {
      id: 1,
      name: "Chioma Adebayo",
      image: demo,
      degree:"Computer Scinece Degree - UNILAG",
      school: "University Of Lagos",
      progress: "100",
      progressStatus:'Completed',
      progressStatusIcon: <CiCircleCheck />,
      amount:'₦150,000',
      date: 'October 18, 2025',
    },
    {
      id: 2,
      name: "Ibrahim Yusuf",
      image: demo,
      degree:"Medicine Degree - ABU",
      school: "Ahmadu Bello University",
      progress: "62",
      progressStatus:'In Progress',
      progressStatusIcon: <LuClock2 />,
      amount:'₦200,000',
      date: 'October 15, 2025',
    },
    {
      id: 3,
      name: "Blessing Okafor",
      image: demo,
      degree:"Law Degree - UI",
      school: "University of Ibadan",
      progress: "45",
      progressStatus:'In Progress',
      progressStatusIcon: <LuClock2 />,
      amount:'₦100,000',
      date: 'October 10, 2025',
    },
    {
      id: 4,
      name: "Emeka Nwosu",
      image: demo,
      degree:"Engineering Degree - OAU",
      school: "Obafemi Awolowo University",
      progress: "100",
      progressStatus:'Completed',
      progressStatusIcon: <CiCircleCheck />,
      amount:'₦175,000',
      date: 'October 5, 2025',
    }

  ]



  return (
    <div className='donor-donation-container'>
      <div className='donor-donation-heading'>
        <h1>My Donation</h1>
        <p>Tract all your contributions and their impact </p>
      </div>
      <aside className='donor-donation-filter'>
         <div className=''>
          <select name="" id="">
            <option value="">All Donations</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>
          <div className='filter-icon'>
            <MdOutlineFilterAlt size={20}/>
          </div>
         </div>
      </aside>
      <section className='donor-donation-students'>
        {
          dataSet.map((e)=> (
            <div className='fixit'>
              <aside key={e.id} className='donor-student-credentials'>
              <div className='part1'>
                <div className='donor-student-image-profile'>
                  <img src={e.image} alt="" />
                </div>
                <div className='donor-name-credentials'>
                  <h2>{e.name}</h2>
                  <p>{e.degree}</p>
                  <p>{e.school}</p>
                </div>
              </div>
              <section className='myHelper'>
                <div className='part2'>
                <div className='donor-progress-percent'>
                  <p>Campaign Progress</p>
                  <p>{e.progress}%</p>
                </div>
                <div className="progress-container">
                      <div className="progress-track">
                        <div
                          className="progress-bar"
                          style={{ width: `${e.progress}%` }}
                        ></div>
                      </div>
                </div>
              
                <div className={e.progressStatus === "Completed" ? "color-green" : "color-blue"}>
                   {e.progressStatusIcon}
                   <p>{e.progressStatus}</p>
                </div>
              </div>
              <div className='part3'>
                <p className='part3-n1'>Your Donations </p>
                <p className='part3-n2'>{e.amount}</p>
                <p className='part3-n3'>{e.date}</p>
              </div>
              </section>
           </aside>
             <aside className='donor-share-profile'>
                <div className='forbiden-code'>
                  <div>
                    <BiShareAlt size={17}/>
                  </div>
                  <div>
                    View Profile
                  </div>
                </div>
              </aside>
            </div>
          ))
        }
       
      </section>
      <div className='load-more'>
        Load More Donations
      </div>
    </div>
  )
}

export default Donations
