import { useState } from 'react'
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate'
import { FoodData } from '../../interfaces/FoodData'
import { Input } from './Input'
import './style.css'

interface ModalProps {
  handleModal(): void
}

export function Modal({ handleModal }: ModalProps) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')

  const { mutate } = useFoodDataMutate()

  const submit = () => {
    const foodData: FoodData = {
      title,
      image,
      price
    }
    mutate(foodData)
  }

  const cancel = () => handleModal()

  return (
    <div className='modal-overlay'>
      <form action='' className='modal-body'>
        <h2>Register Food</h2>
        <Input label='Title:' value={title} updateValue={setTitle} />
        <Input label='Price:' value={price} updateValue={setPrice} />
        <Input label='Image:' value={image} updateValue={setImage} />
        <div className='input-container'>
          <button className='btn-primary' onClick={submit}>
            Register
          </button>
        </div>
        <div className='input-container'>
          <button className='btn-secondary' onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}