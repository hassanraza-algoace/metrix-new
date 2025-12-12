import MessagingApp, { messagesContact } from "@/components/UI/MessagingApp";
// import NewMessageModal from "@/components/UI/ChatMessengerModal";
import SimpleButton from "@/components/UI/SimpleButton";
// import { messagesContact } from "../components/UI/MessagingApp";
import { useState } from "react";
import ChatMessengerModal, {
  NewMessageModal,
} from "@/components/UI/ChatMessengerModal";
// import { NavLink } from "react-router-dom";
interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  isNew: boolean;
  unreadCount?: number;
  // messages: Message[];
}
const DashboardConversations = () => {
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    messagesContact[0]
  );

  const handleNewMessageContactSelect = (messagesContact: Contact) => {
    setSelectedContact(messagesContact);
    setShowNewMessageModal(false);
    setShowChat(true);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h2 className="font-[Inter] text-[16px] font-medium text-[#45464E]">
            Conversations with Customers
          </h2>
        </div>
        <div>
          <SimpleButton
            content={"New Message"}
            // onClick={handleOpenModal}
            onClick={() => setShowNewMessageModal(true)}
            className={
              "text-[14px] cursor-pointer py-1 px-6 gap-1 bg-[#5570F1] text-white! flex items-center rounded-lg"
            }
          />
          <NewMessageModal
            isOpen={showNewMessageModal}
            onClose={() => setShowNewMessageModal(false)}
            messagesContact={messagesContact}
            onSelectContact={handleNewMessageContactSelect}
          />
        </div>
      </div>
      <div>
        {/* <ChatMessengerModal /> */}
        <MessagingApp />
      </div>
    </div>
  );
};

export default DashboardConversations;
