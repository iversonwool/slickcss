import React, { CSSProperties, useState, type FC } from 'react';
import {} from '@'

const images = new Array(7)
  .fill(null)
  .map(
    (_, index) => `https://swiperjs.com/demos/images/nature-${index + 2}.jpg`,
  );

const Swiper: FC<{ title: string }> = (props) => {
  const gap = 100
  const imgLength = images.length
  const [current, setCurrent] = useState(3)
  const layout = () => {

  }
  
  return (
    <div className="banner">
      {images.map((s, index) => {
        const dis = index - current
        const sign = Math.sign(dis)
        let offset = dis * gap
        if (index !== current) {
          offset += sign * 100
        }
        const scale = 0.6 ** Math.abs(dis)
        const rotate = 45 * -sign
        const opacity = 0.5 ** Math.abs(dis)
        const style: CSSProperties = {
          transform: `translate(calc(-50% + ${offset}px), -50%) scale(${scale}) rotateY(${rotate}deg)`,
          zIndex: images.length - Math.abs(dis),
          opacity
        }
        return (
          <div key={index} className="img_container" style={style}>
            <img src={s} alt="Image" className="img" />
          </div>
        );
      })}
      
    </div>
  );
};

export default Swiper;
