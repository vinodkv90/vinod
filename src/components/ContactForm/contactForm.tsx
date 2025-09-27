"use client"
import React from 'react'
import Input from '../Input'
import Button from '../Button'
import useContactForm from './useContactForm'

const ContactForm = () => {
    const { handleSubmit, register, onSubmit, errors, isSubmitting } = useContactForm()
    return (
        <section className='pt-20 md:pt-0 pb-10 md:pb-20 md:min-h-[calc(100vh-66px)] flex items-center justify-center'>
            <div className="container mx-auto px-3 md:max-w-[720px]">
                <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>{`Contact Me`}</h2>
                <p className='mt-5 max-w-lg mx-auto text-foreground font-montserrat font-medium text-center'>I’d love to hear from you! Whether you’re looking to collaborate, have a project in mind, or just want to connect, feel free to reach out.</p>
                <div className="mt-7">
                    <form className="space-y-4 flex flex-wrap gap-3 max-w-[600px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full md:w-[calc(50%-6px)]">
                            <Input placeholder='Name' type='text' {...register("name", { required: true, minLength: 3, maxLength: 50 })} ariaInvalid={errors.name ? true : false} error={errors?.name?.message} />
                        </div>
                        <div className="w-full md:w-[calc(50%-6px)]">
                            <Input placeholder='Email' type='email' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} ariaInvalid={errors.email ? true : false} error={errors?.email?.message} />
                        </div>
                        <div className="w-full md:w-[calc(50%-6px)]">
                            <Input placeholder='Phone' type='text' {...register("phone", { required: true, minLength: 7, maxLength: 10 })} ariaInvalid={errors.phone ? true : false} error={errors?.phone?.message} />
                        </div>
                        <div className="w-full md:w-[calc(50%-6px)]">
                            <Input placeholder='Subject' type='text' {...register("subject", { required: false, maxLength: 50 })} ariaInvalid={errors.subject ? true : false} error={errors?.subject?.message} />
                        </div>
                        <div className="w-full">
                            <Input as='textarea' placeholder='Message' type='text' {...register("message", { required: false, maxLength: 500 })}  ariaInvalid={errors.message ? true : false} error={errors?.message?.message} />
                        </div>
                        <div className="w-full">
                            <Button type="submit" size='md' className='w-full' disabled={isSubmitting}>Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm