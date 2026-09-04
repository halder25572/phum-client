/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { Button } from "antd";
import { verifyToken } from "../utils/verifyToken";


const Login = () => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm();

    const [login] = useLoginMutation();

    const onSubmit = async (data: any) => {
        const userInfo = {
            id: data.id,
            password: data.password
        };

        const response = await login(userInfo).unwrap();
        const user = verifyToken(response.data.accessToken);
        
        dispatch(setUser({ user: user, token: response.data.accessToken }));
    };


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