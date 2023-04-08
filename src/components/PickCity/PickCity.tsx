import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import styles from './PickCity.module.scss'

import { useState } from 'react'

const PickCity = ({ submit }: any) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    submit(city)
    setCity('')
  }

  return (
    <form className={styles.pickCityForm} onSubmit={handleSubmit}>
      <label>
        <TextInput
          placeholder="Enter city name...."
          value={city}
          onChange={(e: any) => setCity(e.target.value)}
        />
      </label>
      <Button>Search</Button>
    </form>
  )
}

export default PickCity
