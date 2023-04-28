import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {
    const [email, setEmail] = useState('agrawal.ayush2500@gmail.com')
    const [password, setPassword] = useState('SomePass5')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('form submitted')
        // console.log({ email, password })
        // const payload = {
        //     email: 'agrawal.ayush2500@gmail.com',
        //     password: 'SomePass5',
        // }

        const payload = {
            email: email,
            password: password,
        }

        axios
            .post('https://e-commerce.urownsite.xyz/users/login', payload)
            .then((res) => {
                console.log(res)
                toast.success(`${email} logged in`, {
                    position: 'bottom-left',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                })
            })
            .catch((err) => {
                toast.error(`Incorrect email or password`, {
                    position: 'bottom-left',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                })
            })
    }
    return (
        <div className="mx-auto max-w-lg py-4">
            <form
                className="flex flex-col items-center gap-4 py-4"
                onSubmit={handleSubmit}
            >
                <input
                    className="w-2/3 rounded border px-2 py-4 outline-none"
                    placeholder="Email"
                    value={email}
                    onInput={({ target }) => setEmail(target.value)}
                ></input>
                <input
                    className="w-2/3 rounded border px-2 py-4 outline-none"
                    placeholder="Password"
                    value={password}
                    onInput={({ target }) => setPassword(target.value)}
                ></input>
                <button className="w-2/3 rounded bg-blue-500  py-4 text-white">
                    Submit
                </button>
            </form>
            <ToastContainer
                position="bottom-left"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Login
