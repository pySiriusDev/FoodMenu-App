import { BsX } from 'react-icons/bs'
import { useFoodDataDelete } from '../../hooks/useFoodDataDelete'
import './style.css'

interface CardProps {
  id: number
  title: string
  image: string
  price: number
}

export function Card({ id, title, image, price }: CardProps) {
  const { mutate } = useFoodDataDelete()

  const deleteFood = () => mutate(id)

  return (
    <div className='card'>
      <button className='delete-btn' onClick={deleteFood}>
        <BsX />
      </button>
      <img src={image} />
      <h2>{title}</h2>
      <p>
        <b>Valor: </b>${price}.00
      </p>
    </div>
  )
}
