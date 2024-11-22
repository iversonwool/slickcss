import React, { CSSProperties, useEffect, useState, type FC } from 'react';
import { animate } from 'slickcss/_utils/animate';

const images = new Array(7)
  .fill(null)
  .map(
    (_, index) => `https://swiperjs.com/demos/images/nature-${index + 2}.jpg`,
  );

const Swiper: FC<{ title: string }> = (props) => {
  const gap = 100
  const imageLength = images.length
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    let p = performance.now()
    let sign = 1
    const cancel = animate({
      duration: Infinity,
      timing(timeFraction) {
        return timeFraction;
      },
      draw() {
        const now = performance.now();
        if (now - p >= 1500) {
          setCurrent((c) => {
          console.log('c', c)
            if (c === imageLength - 1) {
              sign = -1
            }
            else if (c === 0) {
              sign = 1
            }
            return c + sign
          })
          
          p = now
        }
        // console.log('progress', progress)
        // const 
        // setCurrent(current + 1)
      }
    })
    return () => {
      cancel()
    }
  }, [])
  
  return (
    <div className="banner">
      {images.map((s, index) => {
        const dis = index - current
        const sign = Math.sign(dis)
        let offset = dis * gap
        if (index !== current) {
          offset += sign * 60
        }
        const scale = 0.6 ** Math.abs(dis)
        const rotate = 45 * -sign
        const opacity = 0.5 ** Math.abs(dis)
        const style: CSSProperties = {
          transform: `translate(calc(-50% + ${offset}px), -50%) scale(${scale}) rotateY(${rotate}deg)`,
          zIndex: imageLength - Math.abs(dis),
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
