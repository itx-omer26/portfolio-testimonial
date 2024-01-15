import Card from '../card/card'
import './Testimonials.css'
import img1 from '../../../public/photos/img1.jpg'
import img2 from '../../../public/photos/img2.jpg'
import img3 from '../../../public/photos/img3.jpg'

const Testimonials = () => {
  return (
    <>
      <div className='testi'>
        <div className='testheading'>
          
          <h1>Testimonials</h1>
          <p>We are design website in HTML,CSS,JAVASCRIPT and also in REACT. If you get beautiful website to give me a chance  </p>
        </div>
        <div className='card-holder'>
          <Card name="Satya Nadella" job="CEO Microsoft" image={img1} />
          <Card name="john" job="CEO Future" image={img2}/>
          <Card name="Mark" job="CEO Facebook" image={img3}/>
        </div>

      </div>
    </>
  )
}



export default Testimonials