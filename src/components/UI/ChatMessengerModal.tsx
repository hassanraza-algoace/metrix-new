import React, { useState } from "react";
import {
  FiSearch,
  FiX,
} from "react-icons/fi";

interface Message {
  id: number;
  text: string;
  sender: "user" | "customer";
  timestamp: string;
  read?: boolean;
}

interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  isNew: boolean;
  unreadCount?: number;
  messages: Message[];
}

// New Message Modal Component
interface NewMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  messagesContact: Contact[];
  onSelectContact: (contact: Contact) => void;
}

export const NewMessageModal: React.FC<NewMessageModalProps> = ({
  isOpen,
  onClose,
  messagesContact,
  onSelectContact,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const filteredContacts = messagesContact.filter((content) =>
    content.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactClick = (contact: Contact) => {
    onSelectContact(contact);
    setSearchQuery("");
  };

  return (
    <div className="fixed inset-0 bg-[#00000080] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">New Message</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Search Section */}
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            Search a Customer to start a conversation
          </p>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customer name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="max-h-96 overflow-y-auto">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => {
                  console.log("Hello");
                  handleContactClick(contact);
                }}
                className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl shrink-0">
                  {contact.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900">{contact.name}</h3>
                  <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                    <span>Last Activity</span>
                    <span>12 Aug 2022 - 12:55 am</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p>No customers found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Chat Messenger Component
// const ChatMessengerModal = () => {
//   const [contacts] = useState<Contact[]>([
//     {
//       id: 1,
//       name: "Jane Doe",
//       avatar: "👩🏾",
//       lastMessage: "Hi, i want make enquiries about yo...",
//       timestamp: "12:55 am",
//       online: true,
//       isNew: true,
//       unreadCount: 2,
//       messages: [
//         {
//           id: 1,
//           text: "Hello, I want to make enquiries about your product",
//           sender: "customer",
//           timestamp: "12:55 am",
//         },
//         {
//           id: 2,
//           text: "Hello Janet, thank you for reaching out",
//           sender: "user",
//           timestamp: "12:57 am",
//           read: true,
//         },
//         {
//           id: 3,
//           text: "What do you need to know?",
//           sender: "user",
//           timestamp: "12:57 am",
//           read: true,
//         },
//         {
//           id: 4,
//           text: "I want to know if the price is negotiable, i need about 2 Units",
//           sender: "customer",
//           timestamp: "12:55 am",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Janet Adebayo",
//       avatar: "👨🏾",
//       lastMessage: "Hi, i want make enquiries about yo...",
//       timestamp: "12:55 am",
//       online: true,
//       isNew: true,
//       messages: [
//         {
//           id: 1,
//           text: "Hello, I want to make enquiries about your product",
//           sender: "customer",
//           timestamp: "12:55 am",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Kunle Adekunle",
//       avatar: "👨🏽‍⚕️",
//       lastMessage: "Hi, i want make enquiries about yo...",
//       timestamp: "12:55 am",
//       online: false,
//       isNew: true,
//       messages: [
//         {
//           id: 1,
//           text: "Hello, I want to make enquiries about your product",
//           sender: "customer",
//           timestamp: "12:55 am",
//         },
//       ],
//     },
//   ]);

//   const [selectedContact, setSelectedContact] = useState<Contact | null>(
//     contacts[0]
//   );
//   const [messageInput, setMessageInput] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showChat, setShowChat] = useState(false);
//   const [showNewMessageModal, setShowNewMessageModal] = useState(false);

//   const handleSendMessage = () => {
//     if (messageInput.trim() && selectedContact) {
//       const newMessage: Message = {
//         id: selectedContact.messages.length + 1,
//         text: messageInput,
//         sender: "user",
//         timestamp: new Date().toLocaleTimeString("en-US", {
//           hour: "numeric",
//           minute: "2-digit",
//           hour12: true,
//         }),
//         read: false,
//       };

//       const updatedContact = {
//         ...selectedContact,
//         messages: [...selectedContact.messages, newMessage],
//       };

//       setSelectedContact(updatedContact);
//       setMessageInput("");
//     }
//   };

//   const handleContactClick = (contact: Contact) => {
//     setSelectedContact(contact);
//     setShowChat(true);
//   };

//   const handleBackToContacts = () => {
//     setShowChat(false);
//   };

//   const handleNewMessageContactSelect = (contact: Contact) => {
//     setSelectedContact(contact);
//     setShowNewMessageModal(false);
//     setShowChat(true);
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* New Message Modal */}
//       <NewMessageModal
//         isOpen={showNewMessageModal}
//         onClose={() => setShowNewMessageModal(false)}
//         messagesContact={contacts}
//         onSelectContact={handleNewMessageContactSelect}
//       />

//       {/* Contacts Sidebar */}
//       <div
//         className={`${
//           showChat ? "hidden md:flex" : "flex"
//         } w-full md:w-96 bg-white border-r border-gray-200 flex-col`}
//       >
//         {/* Header */}
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-xl font-semibold text-gray-800">Contacts</h1>
//             <div className="flex items-center gap-3">
//               <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
//                 34
//               </span>
//               <button
//                 onClick={() => setShowNewMessageModal(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
//               >
//                 New Message
//               </button>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative">
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Contacts List */}
//         <div className="flex-1 overflow-y-auto">
//           {filteredContacts.map((contact) => (
//             <div
//               key={contact.id}
//               onClick={() => handleContactClick(contact)}
//               className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
//                 selectedContact?.id === contact.id
//                   ? "bg-blue-50 border-l-4 border-blue-500"
//                   : ""
//               }`}
//             >
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
//                   {contact.avatar}
//                 </div>
//                 {contact.online && (
//                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//                 )}
//               </div>

//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="font-medium text-gray-900 truncate">
//                     {contact.name}
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     {contact.isNew && (
//                       <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
//                         New
//                       </span>
//                     )}
//                     {contact.unreadCount && (
//                       <span className="bg-orange-400 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
//                         {contact.unreadCount}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <p className="text-sm text-gray-500 truncate">
//                     {contact.lastMessage}
//                   </p>
//                   <span className="text-xs text-gray-400 ml-2">
//                     {contact.timestamp}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div
//         className={`${
//           showChat ? "flex" : "hidden md:flex"
//         } flex-1 flex-col bg-white`}
//       >
//         {selectedContact ? (
//           <>
//             {/* Chat Header */}
//             <div className="p-4 border-b border-gray-200 bg-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={handleBackToContacts}
//                     className="md:hidden text-gray-600 hover:text-gray-900"
//                   >
//                     <FiArrowLeft size={24} />
//                   </button>
//                   <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
//                     {selectedContact.avatar}
//                   </div>
//                   <div>
//                     <h2 className="font-semibold text-gray-900">
//                       {selectedContact.name}
//                     </h2>
//                     <p className="text-sm text-gray-500 flex items-center gap-1">
//                       {selectedContact.online && (
//                         <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                       )}
//                       {selectedContact.online ? "Online" : "Offline"}{" "}
//                       {selectedContact.timestamp}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded">
//                     New Customer
//                   </span>
//                   <button className="text-blue-600 hover:text-blue-700 font-medium">
//                     View Profile
//                   </button>
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <FiShoppingBag />
//                     <span className="text-sm">0 Orders</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="p-4 bg-gray-50 border-b border-gray-200">
//               <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
//                 <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center text-2xl">
//                   📱
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-medium text-gray-900">iPhone 13</h3>
//                   <p className="text-lg font-semibold text-gray-900">
//                     ₦730,000.00
//                   </p>
//                 </div>
//                 <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded">
//                   12 In Stock
//                 </span>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               <div className="text-center">
//                 <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                   12 August 2022
//                 </span>
//               </div>

//               {selectedContact.messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex ${
//                     message.sender === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-md ${
//                       message.sender === "user"
//                         ? "bg-orange-50"
//                         : "bg-blue-500 text-white"
//                     } rounded-lg p-3`}
//                   >
//                     <p className="text-sm">{message.text}</p>
//                     <div className="flex items-center justify-end gap-1 mt-1">
//                       <span
//                         className={`text-xs ${
//                           message.sender === "user"
//                             ? "text-gray-500"
//                             : "text-white/80"
//                         }`}
//                       >
//                         {message.timestamp}
//                       </span>
//                       {message.sender === "user" && message.read && (
//                         <BsCheckAll className="text-blue-500" />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="text-center">
//                 <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                   Today
//                 </span>
//               </div>
//             </div>

//             {/* Message Input */}
//             <div className="p-4 border-t border-gray-200 bg-white">
//               <div className="flex items-center gap-2">
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <FiPlus size={24} />
//                 </button>
//                 <input
//                   type="text"
//                   placeholder="Your message"
//                   value={messageInput}
//                   onChange={(e) => setMessageInput(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                   className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <FiSmile size={24} />
//                 </button>
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <FiSend size={20} />
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-gray-400">
//             <div className="text-center">
//               <p className="text-lg">Select a contact to start messaging</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatMessengerModal;
