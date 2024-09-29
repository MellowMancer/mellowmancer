"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().refine((value) => !/\d/.test(value), {
        message: "Come on, we know your name does not have numbers",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    message: z.string().min(5, {
        message: "Nothing more? Tell me more!",
    }),
})

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

    // 3. Connect the form to the submit handler.
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-8 w-full md:w-max">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-2 text-xl">Name: </FormLabel>
                  <FormControl className="my-0 w-full">
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-2 text-xl">Email: </FormLabel>
                  <FormControl className="my-0 w-full">
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-2 text-xl">Message: </FormLabel>
                  <FormControl className="my-0 w-full">
                  <Textarea
                  // placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                  />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="mt-4" type="submit">Submit</Button>
          </form>
        </Form>
      )
}
