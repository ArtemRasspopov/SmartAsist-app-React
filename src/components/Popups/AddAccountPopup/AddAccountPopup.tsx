import React from 'react'
import Button from '../../Shared/Buttons/Button/Button'

interface AddAccountPopupProps {
  closePopup?: () => void 
}

const AddAccountPopup = ({closePopup} : AddAccountPopupProps) => {
  return (
    <div>AddAccountPopup
      <Button onClick={closePopup}>Close</Button>
    </div>
  )
}

export default AddAccountPopup