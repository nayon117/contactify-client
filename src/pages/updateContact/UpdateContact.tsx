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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validations";
import { useLoaderData } from "react-router-dom";
interface ContactData {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
  picture?: string;
}

const UpdateContact = () => {
  const { _id, name, email, phone, address, picture }: ContactData =
    useLoaderData() as ContactData;

  const [submitting, setSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      email: email || "",
      phone: phone,
      address: address,
      picture: picture || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      const response = await fetch(`http://localhost:5000/contacts/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("Contact updated successfully!");
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-12">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>
                Name <span className="text-blue-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus  min-h-[56px] border" {...field} />
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>Email</FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus min-h-[56px] border" {...field} />
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>
                Phone Number <span className="text-blue-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus min-h-[56px] border" {...field} />
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>
                Address<span className="text-blue-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus min-h-[56px] border" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>
                Picture <span className="text-blue-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus min-h-[56px] border" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? "Updating..." : "Update"}
        </Button>
      </form>
    </Form>
  );
};
export default UpdateContact;
