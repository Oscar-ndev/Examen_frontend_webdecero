import * as React from "react";
import "./login.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navegacion = useNavigate();

  const {register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = async (data) => {
    try {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: data.usuario,
          password: data.password,
          expiresInMins: 30,
        }),
        // credentials: 'include' 
      })
      .then(res => res.json())
      .then(data => {
        if(data.accessToken){
          localStorage.setItem("Token", data.accessToken);
          navegacion('/profile')
        }else{
          alert("Usuario y/o Contraseña incorrectos.");
        }
      });
    } catch (error) {
      console.log("Error al iniciar sesión: " + error);
    }
  }


    return (
        <div
            className="d-flex justify-content-center align-items-center"
        >
            <div className="login-card p-5">
                <h1 className="text-center mb-5">Iniciar sesión</h1>
                <form onSubmit={handleSubmit((onSubmit))}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control"
                            id="InputEmail"
                            {...register('usuario', { required: true })}
                            placeholder="Usuario"
                        />
                        {errors.usuario && <p>Favor de introducir un usuario.</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            {...register('password', { required: true })}
                            placeholder="Contraseña"
                        />
                        {errors.password && <p>Favor de introducir la contraseña.</p>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
