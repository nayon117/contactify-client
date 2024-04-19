import EditModal from "@/components/modal/EditModal";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useCart from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  const axiosPublic = useAxiosPublic();
  const [, refetch] = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  const deleteContact = (id: string) => {
    // Display confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed deletion, proceed with deletion
        fetch(`http://localhost:5000/contacts/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setContacts(contacts.filter((contact) => contact._id !== id));
              // Display success toast notification
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your contact has been deleted.",
                timer: 3000, // Adjust the duration as needed
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  };

  const handleAddToCart = (contact: Contact) => {
    axiosPublic.post("/carts", contact).then((res) => {
      console.log(res.data);
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to favourites`,
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch cart to update the cart items count
        refetch();
      }
    });
  };

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-2xl text-center font-semibold">All Contacts</h1>
        <Link to='/favourits'><Button>Favourits</Button></Link>
      </div>
      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="px-2 py-4 bg-white shadow-sm rounded-lg relative"
            >
              <div onClick={() => handleAddToCart(contact)}>
                <FaHeart className="h-5 w-5"></FaHeart>
              </div>
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
                <button
                  className="btn"
                  onClick={() => handleEditClick(contact)}
                >
                  <CiEdit className="text-xl" />
                </button>
                <button
                  onClick={() => deleteContact(contact._id)}
                  className="btn"
                >
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
