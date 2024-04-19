import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useCart from "@/hooks/useCart";
import useAxiosPublic from "@/hooks/useAxiosPublic";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  picture: string;
}

const Favourits = () => {
  const axiosPublic = useAxiosPublic();
  const [cart, refetch] = useCart();

  const handleDelete = (id: string) => {
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
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-12">
      <h2 className="title mb-12 mt-3 text-center">
      Total  Favourits: {cart?.length}
      </h2>
      
      <div>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {cart.map((contact: Contact) => (
              <div
                key={contact._id}
                className="px-2 py-4 bg-white shadow-sm rounded-lg relative"
              >
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
                    onClick={() => handleDelete(contact._id)}
                    className="btn"
                  >
                    <MdAutoDelete className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">No Favourits found</div>
        )}
      </div>
    </div>
  );
};

export default Favourits;
