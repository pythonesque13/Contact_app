import {useState} from 'react'

const UseModal = () => {
  const [openModal, setopenModal]=useState(false)

  const onOpen=()=>{
    setopenModal(true)
  }

  const onClose=()=>{
    setopenModal(false)
  }

  return {openModal, onOpen, onClose}
}

export default UseModal

