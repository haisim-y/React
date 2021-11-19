//imrc 
import React, { Component, useState } from 'react'
import Aboutchild from './aboutchild';
//rfce
function About() {
    
    const [count,setcount]=useState(0);
    const [name,setname]=useState("Haisim Yasin");
    const [cities,setCities]=useState(["Islamabad","Lahore","Tokyo"]);
    const [medicine,setmedicine]=useState({
        "medications": [{
        "aceInhibitors": [{
        "name": "lisinopril",
        "strength": "10 mg Tab",
        "dose": "1 tab",
        "route": "PO",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        },
        {
        "name": "lisinopril",
        "strength": "10 mg Tab",
        "dose": "1 tab",
        "route": "Sho",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        }],
        "antianginal": [{
        "name": "nitroglycerin",
        "strength": "0.4 mg Sublingual Tab",
        "dose": "1 tab",
        "route": "SL",
        "sig": "q15min PRN",
        "pillCount": "#30",
        "refills": "Refill 1"
        }],
        "anticoagulants": [{
        "name": "warfarin sodium",
        "strength": "3 mg Tab",
        "dose": "1 tab",
        "route": "PO",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        },
        {
        "name": "DUMMY DATA",
        "strength": "3 mg Tab",
        "dose": "1 tab",
        "route": "PO",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        }],
        "betaBlocker": [{
        "name": "metoprolol tartrate",
        "strength": "25 mg Tab",
        "dose": "1 tab",
        "route": "PO",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        }],
        "diuretic": [{
        "name": "furosemide",
        "strength": "40 mg Tab",
        "dose": "1 tab",
        "route": "PO",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        }],
        "mineral": [{
        "name": "potassium chloride ER",
        "strength": "10 mEq Tab",
        "dose": "1 tab",
        "route": "PO",
        "sig": "daily",
        "pillCount": "#90",
        "refills": "Refill 3"
        }]
        }
        ],
        "labs": [{
        "name": "Arterial Blood Gas",
        "time": "Today",
        "location": "Main Hospital Lab"
        },
        {
        "name": "BMP",
        "time": "Today",
        "location": "Primary Care Clinic"
        },
        {
        "name": "BNP",
        "time": "9 Weeks",
        "location": "Primary Care Clinic"
        },
        {
        "name": "BUN",
        "time": "1 Year",
        "location": "Primary Care Clinic"
        },
        {
        "name": "Cardiac Enzymes",
        "time": "Today",
        "location": "Primary Care Clinic"
        },
        {
        "name": "CBC",
        "time": "1 Year",
        "location": "Primary Care Clinic"
        },
        {
        "name": "Creatinine",
        "time": "1 Year",
        "location": "Main Hospital Lab"
        },
        {
        "name": "Electrolyte Panel",
        "time": "1 Year",
        "location": "Primary Care Clinic"
        },
        {
        "name": "Glucose",
        "time": "1 Year",
        "location": "Main Hospital Lab"
        },
        {
        "name": "PT/INR",
        "time": "999 Weeks",
        "location": "Primary Care Clinic"
        },
        {
        "name": "PTT",
        "time": "3 Weeks",
        "location": "Coumadin Clinic"
        },
        {
        "name": "TSH",
        "time": "1 Year",
        "location": "Primary Care Clinic"
        }
        ],
        "imaging": [{
        "name": "Chest X-Ray",
        "time": "Today",
        "location": "Main Hospital Radiology"
        },
        {
        "name": "Chest X-Ray",
        "time": "Today",
        "location": "Main Hospital Radiology"
        },
        {
        "name": "Chest X-Ray",
        "time": "Today",
        "location": "Main Hospital Radiology"
        }
        ]
    });
  
    
    
    const incCount= ()=>{
        console.log("Button cLicked");
        setcount(count+1);
        const jobs = [
            { id: 1, isActive: true },
            { id: 2, isActive: false },
            { id: 3, isActive: true },
          ];
          const joblist=jobs.filter((job)=>job.isActive);
          console.log(joblist);
    }
    const decCount= ()=>{
        console.log("Button cLicked");
        setcount(count-1);
    }

    return (
        <div>
            <h1>My Info</h1>
            <p> {name} </p>
            <p>BCS183028</p>

            <p>count is {count}</p>
            
             {cities[1]}
             {
            
             cities.map((city) =>(<li>{city} </li>))
             }
                {
             medicine.medications[0].aceInhibitors.map((med)=> 
              (<ul> <li>{med.name}<br/><br/>  {med.route=="Sho" ? "shoaib" : med.route} </li></ul>) )
                }
            
            
            <button onClick={incCount}>Click Me to Increment</button> 
            <br/>
            <button onClick={decCount}>Click Me to Decrement </button> 
            <Aboutchild myname={name}/>
        </div>
    )
}

export default About
