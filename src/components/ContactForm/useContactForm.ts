import { SubmitHandler, useForm } from "react-hook-form"

interface IFormInput {
  name: string
  email: string
  phone: number
  subject: string
  message: string
}

type Props = {}

const useContactForm = (props: Props) => {

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
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