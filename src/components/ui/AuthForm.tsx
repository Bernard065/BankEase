'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from './CustomInput'
import { Loader, Loader2 } from 'lucide-react'

const formSchema = (type: string) => z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must contain at least 8 characters' }),
    firstName: type === 'sign-in' ? z.string().optional() : z.string(),
    lastName: type === 'sign-in' ? z.string().optional() : z.string(),
    address: type === 'sign-in' ? z.string().optional() : z.string(),
    state: type === 'sign-in' ? z.string().optional() : z.string(),
    postal: type === 'sign-in' ? z.string().optional() : z.string().regex(/^\d{5}$/, { message: 'Postal code must be 5 digits' }),
    date: type === 'sign-in' ? z.string().optional() : z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date must be in YYYY-MM-DD format' }),
    kra: type === 'sign-in' ? z.string().optional() : z.string(),
})


const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const schema = formSchema(type);
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          address: "",
          state: "",
          postal: "",
          date: "",
          kra: "",
        },
    })
     
      // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof schema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true);
        console.log(values)
        setIsLoading(false);
    }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' className='flex  cursor-pointer items-center gap-1'>
                <Image 
                    src='/icons/logo3.svg'
                    width={34}
                    height={34}
                    alt='BankEase'
                />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>BankEase</h1>
            </Link>

            <div className='flex flex-col gap-1 md:gap3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user
                    ? 'Link Account'
                    : type === 'sign-in'
                    ? 'Sign In'
                    : 'Sign Up'
                    }
                    <p className='text-16 font-normal text-gray-600'>
                        {user
                        ? 'Link your account to get started'
                        : 'Please enter your details'
                        }
                    </p>
                </h1>
            </div>
        </header>
        {user ? (
            <div className='flex flex-col gap4'>
                {/* plaid link */}
            </div>
        ): (
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        {type === 'sign-up' && (
                            <>
                                <div className='flex gap-4'>
                                    <CustomInput form={form} name='firstName' label='FirstName' placeholder='Enter your first name' type='text' />
                                    <CustomInput form={form} name='lastName' label='LastName' placeholder='Enter your last name' type='text' />
                                </div>

                                <CustomInput form={form} name='address' label='Address' placeholder='Enter your address' type='text' />
                                <div className='flex gap-4'>
                                    <CustomInput form={form} name='state' label='State' placeholder='eg: Nairobi' type='text' />
                                    <CustomInput form={form} name='postal' label='Postal Code' placeholder='eg: 00100' type='text' />
                                </div>

                                <div className='flex gap-4'>
                                    <CustomInput form={form} name='date' label='Date of Birth' placeholder='YYYY-MM-DD' type='date' />
                                    <CustomInput form={form} name='kra' label='KRA Pin' placeholder='eg: A0003427' type='text' />
                                </div>
                            </>
                        )}
                        <CustomInput form={form} name='email' label="Email" placeholder='Enter your email' type='text' />

                        <CustomInput form={form} name='password' label="Password" placeholder='Enter your password' type='password' />
                        <div className='flex flex-col gap-4'>
                            <Button 
                                type="submit" className='form-btn'
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 
                                            size={20}
                                            className='animate-spin'
                                        /> &nbsp; Loading...
                                    </>
                                ): type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                            </Button>
                        </div>
                    </form>
                </Form>
                <footer className='flex justify-center gap-1'>
                    <p className='text-14 font-normal text-gray-600'>
                        {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
                    </p>
                    <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                        {type=== 'sign-in' ? 'Sign Up' : 'Sign In'}
                    </Link>
                </footer>
            </>
        )}
    </section>
  )
}

export default AuthForm