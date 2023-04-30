interface InputProps {
  label: string
  value: string | number
  updateValue(value: any): void
}

export function Input({ label, value, updateValue }: InputProps) {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
    </div>
  )
}
