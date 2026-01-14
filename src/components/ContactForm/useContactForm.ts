import { IFormInput } from "@/types/contact"
import { RootObject } from "@/types/home";
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

    setTimeout(async () => {
        console.log('Server health check!', errors);
        const { data }: RootObject = await nextFetch("/about");
        if(data) {
            console.log('Server is healthy:', data);
        } else {
            console.error('Server health check failed:', data);
        }
    }, 60000*5); // Check server health every 5 minutes

    return {
        handleSubmit,
        register,
        onSubmit,
        errors, 
        isSubmitting
    }
}

export default useContactForm