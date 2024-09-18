import './App.css'
import { useState, useEffect } from 'react'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from "../config/firebase"
import Logo from "./assets/logo.png"
import { CiSearch, CiCirclePlus } from "react-icons/ci";
import Not from "./Components/Not"
import Card from './Components/Card'
import UseModal from './Hook/UseModal'
import AddAndUpdate from './Components/AddAndUpdate'
import { ToastContainer } from 'react-toastify'

function App() {
  
  const [contact, setContact] = useState([])

  const {openModal, onOpen, onClose}=UseModal()

  useEffect(() => {
    const getContact=async()=>{

      try {
        const contactRef = collection(db, "contact");
        onSnapshot(contactRef, (snapshot) => {
          const contactList=snapshot.docs.map((doc) => {
            return { 
              id: doc.id,
              ...doc.data()
            };
          });
          setContact(contactList);
          return contactList;
        })

      } catch (error) {
        console.log(error)
      } 
    };
    getContact()

  },[])

  const filterContacts=(e)=>{
    const value=e.target.value
    const contactsRef=collection(db, "contact")

    onSnapshot(contactsRef, (snapshot) => {
      const contactList=snapshot.docs.map((doc) => {
        return { 
          id: doc.id,
          ...doc.data()
        };
      });
      const filteredContacts=contactList.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))

        setContact(filteredContacts);
        return filteredContacts
      
    })
  }

  return (
    <>
      <div className="mx-auto max-w-[500px] px-4">
        <div className="flex justify-center items-center p-9 shadow-lg mb-5">
          <img src={Logo} alt="" className="w-16" />
        </div>
        <div className='p-4 relative flex items-center flex-grow gap-4'>
          <input onChange={filterContacts} type="text" placeholder="Search" className="h-10 flex-grow rounded-md bg-transparent border border-dark  py-2 pl-10 text-gray-500 " />
          <div className="absolute ml-2">
            <CiSearch className="text-3xl text-gray-500 cursor-pointer"/>
          </div>
          <CiCirclePlus onClick={onOpen}  className="text-3xl text-gray-500 cursor-pointer"/>
        </div>
        
        <div>
          {contact.length<=0 ? (
            <Not />
          ):(contact.map((contact)=>(
            <Card key={contact.id} contact={contact}/>
          )))}
        </div>

      </div>
      <ToastContainer position="bottom-center"/>
      <AddAndUpdate openModal={openModal} onClose={onClose}/>
    </>
  )
}

export default App
