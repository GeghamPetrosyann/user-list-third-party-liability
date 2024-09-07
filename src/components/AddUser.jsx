import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
    name: yup.string().required("enter the name"),
    age: yup.number().required("enter the surname"),
    password: yup.string().required("enter the name ").min(8, "have to write more then 8 symbols"),
    login: yup.string().email("Enter a valid email").required("Enter the email"),
})

export default function AddUser({ onAdd }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) })

    const handleAdd = data => {
        onAdd(data)
        // toast("success")
        reset()
    }

    return <>
        <form onSubmit={handleSubmit(handleAdd)}>
            <p>name</p>
            <p>{errors.name?.message}</p>
            <input
                type="text"
                {...register("name")}
            />
            <p>age</p>
            <input
                type="text"
                {...register("age")}
            />
            <p>login</p>
            <input
                type="text"
                {...register("login")}
            />
            <p>password</p>
            <input
                type="text"
                {...register("password")}
            />
            <ToastContainer />
            <button>Save</button>
        </form>
    </>
}
