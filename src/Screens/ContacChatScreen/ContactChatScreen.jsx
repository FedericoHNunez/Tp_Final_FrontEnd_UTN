import React from "react"
import "./ContactChatScreen.css"
import { SideBarContactChats } from '../../Components/SideBars/SideBarContactChats/SideBarContactChats'
import { useValidateContact } from "../../Hooks/useValidateContact"


export const ContactChatScreen = () => {
    const redirect = useValidateContact()
    if (redirect) return redirect


    return (
        <aside className="asideView">
            <SideBarContactChats />
        </aside>
    )
}