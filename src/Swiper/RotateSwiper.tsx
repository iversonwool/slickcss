import React from 'react'


const images = new Array(6)
  .fill(null)
  .map(
    (_, index) => `https://swiperjs.com/demos/images/nature-${index + 2}.jpg`,
  );

const RotateSwiper = () => {
  return (

    <div className='rotate_bg'>
      <div className='rotate_container'>
        <div className='rotate_circle'>
          {images.map(e => {
            return <img className='rotate_item ' src={e} alt='nature' key={e} />
          })}
        </div>
      </div>
    </div>
    
  )
}

export default RotateSwiper