import React, { useRef, useState, type FC } from 'react';
import {flushSync} from 'react-dom'

const swapElements = (array: string[], index1: number, index2: number) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

function getPositionY(element: HTMLElement) {
  return element.getBoundingClientRect().top;
}

const origin = [
  'HTML + CSS',
  'JAVASCRIPT',
  '框架',
  'NodeJS',
  '工程化',
  '网络',
  '移动端',
]

const FLIP: FC = () => {
  const [tags, setTags] = useState([...origin])
  const firstRef = useRef<HTMLDivElement>()
  // const refParams = {
  //   ref: firstRef
  // }

  const raf = (callback: () => void) => {
    requestAnimationFrame(()=> {
      requestAnimationFrame(callback)
    })
  }
  const flip = () => {
    // tags.shffule
    const length = tags.length
    // const randomIndex = Math.floor(Math.random() * (length - 1)) + 1
    const randomIndex = 6
    // 假设第一个元素跟 randomIndex个元素交换位置
    console.log('randomIndex', randomIndex)
    swapElements(tags, 0, randomIndex)
    // setTags([...tags])
    // const start = getPositionY(firstRef.current!)
    // const end = start + randomIndex + 30
    // const d = document.getElementById('idHTML + CSS')
    // const start =  getPositionY(d!)
    // console.log('start', start)
    const d = document.getElementById('idHTML + CSS')
    // setTags([...tags])
    // d!.style.transform = `translateY(-${randomIndex * 34}px)`
    // // const end =  getPositionY(d!)
    // // console.log('end', end)
    // const callback = () => {
    //   d!.style.transition = 'transform 0.25s'
    //   d!.style.removeProperty('transform')
    //   console.log('play')
    // }
    // raf(callback)
    flushSync(() => {
      setTags([...tags])
      
    })
    d!.style.transform = `translateY(-${randomIndex * 34}px)`
      // const end =  getPositionY(d!)
      // console.log('end', end)
    const callback = () => {
      d!.style.transition = 'transform 0.25s'
      d!.style.removeProperty('transform')
      console.log('play')
    }
    raf(callback)
    
  }
  const reset = () => {
    setTags([...origin])
  }

 
  return (
    <div className='flip_container'>
      <p>一次性动画</p>

      <button style={{marginBottom: 10}} onClick={flip} type="button">FLIP</button>
      <button style={{marginBottom: 10,marginLeft: 10}} onClick={reset} type="button">Reset</button>
      {tags.map((tag) =>{

        return <div id={`id${tag}`} className='tag' key={tag}>{tag}</div>
      })}
    </div>
  )
}

export default FLIP;
