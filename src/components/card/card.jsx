import { useState } from 'react'
import './card.css'


const Card = ({name, image, job}) => {
    // const [name, setName] = useState('John Doe');
    // const [job, setJob] = useState('CEO at ABC Company');
    const [clientReview, setCientReview] = useState('lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,')
    return (
        <>
            {/* -------------------------- card 1 --------------------------------------- */}
            <div className="card">
                <div className="upper-container">
                    <div className="image-container">
                        <img src={image} alt='' height="100px" width="100px" />

                    </div>
                </div>
                <div className="lower-container">
                    <h3>{name}</h3><br />
                    <h4>{job}</h4>
                    <p>{clientReview}</p>
                    <button>View More</button>
                </div>
            </div>
        </>
    )
}

export default Card