import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validations";
import Swal from "sweetalert2";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  picture: string;
}

interface EditModalProps {
  closeModal: () => void;
  contact: Contact;
  updateContact: (contact: Contact) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  closeModal,
  contact,
  updateContact,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: contact,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      const response = await fetch(
        `http://localhost:5000/contacts/${contact._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        console.log("Contact updated successfully!");
        updateContact({ ...contact, ...values });
        closeModal();
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Contact updated successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000 
          });
      } else {
        console.error(
          "Failed to update contact:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred while updating contact:", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Edit Contact</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="no-focus border" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="no-focus  border" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="no-focus  border" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="no-focus  border" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="no-focus  border" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="button" onClick={closeModal} className="mr-4">
                Cancel
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Updating..." : "Update"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditModal;
