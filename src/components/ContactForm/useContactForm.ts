import { IFormInput } from "@/types/contact"
import { nextFetch } from "@/utils/nextFetch"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

type ContactResponse = {
    message: string;
    [key: string]: string | number | boolean | object | null | undefined;
};

const useContactForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const response = await nextFetch<ContactResponse>(
            '/contact-forms', 
            'POST',
            {
                'Content-Type': 'application/json',
            },
            data,
            "include"
        )
        console.log('response', response);
        if(response?.data) {
            reset()
            toast.success(response.message)
        } else {
            toast.error('Something went wrong. Please try again later.')
        }
    }

    return {
        handleSubmit,
        register,
        onSubmit,
        errors, 
        isSubmitting
    }
}

export default useContactForm