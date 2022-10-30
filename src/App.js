import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

const App = () => {
  const [color, setColor] = useState('')
  const [error, setError]= useState(false)
  const [list, setList] = useState(new Values('#0bffac').all(10))

  const handleSubmit = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    }
    catch(error) {
      setError(true)
      console.log(error)
    }
  }
  return <>
    <section className="container">
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={e=>setColor(e.target.value)} placeholder='#0bffac' className={`${error ? 'error' : null}`} />
        <button className='btn' type='submit'>submit</button>
      </form>
    </section>
    <section className="colors">
      {
        list.map((color,index) => {
          return <SingleColor key={index} {...color} index = {index} hexColor={color.hex}/>
        })
      }
    </section>
  </>
}

export default App
