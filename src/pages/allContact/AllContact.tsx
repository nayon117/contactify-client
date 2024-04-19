import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";

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
  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);
  return (
    <div className="section-container my-12">
      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="px-2 py-4 bg-white shadow-sm rounded-lg"
            >
              <img
                src={contact.picture}
                alt={contact.name}
                className="w-16 h-16 text-center mx-auto object-cover rounded-full"
              />
              <div className="mt-4 text-center ">
                <h2 className="text-center  text-gray-500">{contact.name}</h2>
                <p className="text-sm">Email: {contact.email}</p>
                <p className="text-sm">Phone: {contact.phone}</p>
                <p className="text-sm">Address: {contact.address}</p>
              </div>
              <div className="flex items-center justify-evenly mt-4">
                <button className="btn">
                    <CiEdit className="text-xl" />
                </button>
                <button className="btn">
                    <MdAutoDelete className="text-xl" />
                    </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">No contacts found</div>
      )}
    </div>
  );
};
export default AllContact;
