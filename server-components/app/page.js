
// import {useState,useEffect} from 'react'
import fs from 'fs/promises'
export default function Home() {
  // const [count, setCount] = useState(0)

  let a = fs.readFile('.gitignore', 'utf-8')
  a.then(e=>{console.log(e.toString())})
  return (
    <div >
      
      {/* i am a component {count}
      <button className='border-2 bg-amber-300' onClick={()=>setCount(count+1)}>click me</button> */}
    </div>
  );
}
