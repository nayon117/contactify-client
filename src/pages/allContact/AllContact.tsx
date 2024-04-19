import EditModal from "@/components/modal/EditModal";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";

// Define Contact type
interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  picture: string;
}

const AllContact = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  const deleteContact = (id: string) => {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setContacts(contacts.filter((contact) => contact._id !== id));
        }
      });
  };

  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact); // Set the selected contact for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setSelectedContact(null); // Reset the selected contact
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="my-12">
      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {contacts.map((contact) => (
            <div key={contact._id} className="px-2 py-4 bg-white shadow-sm rounded-lg">
              <img
                src={contact.picture}
                alt={contact.name}
                className="w-16 h-16 text-center mx-auto object-cover rounded-full"
              />
              <div className="mt-4 text-center ">
                <h2 className="text-center text-gray-500">{contact.name}</h2>
                <p className="text-sm">Email: {contact.email}</p>
                <p className="text-sm">Phone: {contact.phone}</p>
                <p className="text-sm">Address: {contact.address}</p>
              </div>
              <div className="flex items-center justify-evenly mt-4">
                <button className="btn" onClick={() => handleEditClick(contact)}>
                  <CiEdit className="text-xl" />
                </button>
                <button onClick={() => deleteContact(contact._id)} className="btn">
                  <MdAutoDelete className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">No contacts found</div>
      )}
      
      {isModalOpen && selectedContact && (
        <EditModal
          contact={selectedContact}
          closeModal={handleCloseModal}
          updateContact={(updatedContact) => {
            setContacts((prevContacts) => 
              prevContacts.map((contact) =>
                contact._id === updatedContact._id ? updatedContact : contact
              )
            );
            handleCloseModal(); 
          }}
        />
      )}
    </div>
  );
};

export default AllContact;
