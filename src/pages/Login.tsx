/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {

    const {register, handleSubmit} = useForm();

    const [login, {data, isLoading, isError}] = useLoginMutation();

    const onSubmit = (data: any) => {
        const userInfo = {
            id: data.id,
            password: data.password
        };
        login(userInfo);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" {...register("id")} />
            </div>
            <div>
                <label htmlFor="id">Password</label>
                <input type="password" id="password" {...register("password")} />
            </div>
            <Button type="primary" htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;