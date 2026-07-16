import { useState } from "react"

function useMessages ({messages_server}){
    const [messages, setMessages] = useState(messages_server)

    function createMessage(content, isMe) {

        const new_id = messages.length + 1
        const new_message = {
            content: content,
            sendByMe: isMe,
            id: new_id
        }

        const messages_cloned = [...messages]
        messages_cloned.push(new_message)

        setMessages(messages_cloned)
    }

    function handleCreateTestMessage() {
        createMessage('Vas a ver el partido', true)
    }

    function deleteAllMessages() {
        setMessages([])
    }

    function deleteMessageById(message_id) {

        const filtered_messages = messages.filter(
            (message) => {
                return (message.id !== message_id)
            }
        )

        setMessages(filtered_messages)
    }


    function handleCreateMessage (event){
        event.preventDefault() 

     
        const form = event.target

        const message_field = form.message
        createMessage(message_field.value, true)
    }

    return {
        messages,
        createMessage,
        handleCreateTestMessage,
        deleteAllMessages,
        deleteMessageById,
        handleCreateMessage
    }
}

export default useMessages