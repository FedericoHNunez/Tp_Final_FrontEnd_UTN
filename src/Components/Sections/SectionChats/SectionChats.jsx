import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
export const SectionChats = () => {
    
  const {contacts} = useContext(ContactContext)
  
  return (
        <>
   
            {
           contacts
  .filter(contact => contact.messages?.length > 0)
  .map(contact => (
    <div key={contact.id}>
      <h2>{contact.name.title}</h2>
      <p>{contact.name.last}</p>
      <p>{contact.name.first}</p>
    </div>
  ))
        }
      
        </>
    )
}