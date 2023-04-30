import { useState } from 'react'
import { Card } from './components/Card'
import { useFoodData } from './hooks/useFoodData'
import './App.css'
import { Modal } from './components/Modal/Modal'

export default function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className='container'>
      <h1>Food Menu</h1>
      <div className='card-grid'>
        {data?.map((data, key) => (
          <Card
            key={key}
            title={data.title}
            image={data.image}
            price={data.price}
          />
        ))}
      </div>
      {isModalOpen && <Modal handleModal={handleModal} />}
      {!isModalOpen && <button onClick={handleModal}>Register New Food</button>}
    </div>
  )
}
