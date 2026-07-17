

import { Link, useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'

import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import {useContext} from "react"

export const ContactChatScreen = () => {
  const { contact_selected } = useContext(ContactContext)
  
const params = useParams()
console.log(params)
    return (
        <>
            <section>
                <SectionChatsPreview />
            </section>
            <aside>
                <h1>{contact_selected.alias}</h1>
            </aside>    
        </>
    )
}