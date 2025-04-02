import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const token = localStorage.getItem("Token");
    let navegacion = useNavigate();
    const [Usuario, setUsuario] = useState([]);

    //hook utilizado para cuando se termine de cargar la página
    useEffect(() => {
        if (token) {
            fetch("https://dummyjson.com/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                // credentials: "include",
            })
                .then((res) => res.json())
                .then((data) => {
                    setUsuario(data);
                });
        } else {
            alert("Sin autenticación");
        }
    });

    const Logout = () => {
        localStorage.removeItem("Token");
        navegacion("/");
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a
                        className="navbar-brand align-items-center"
                        href="/profile"
                    >
                        <img
                            src="identity.png"
                            alt="Logo"
                            width="150"
                            height="35"
                        />
                    </a>
                    <ul class="navbar-nav d-flex justify-content-center align-items-center">
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Cerrar Sesión</a> */}
                            <button className="btn btn-danger" onClick={Logout}>
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <h1 className="text-center">Perfil del Usuario</h1>
                <pre>{JSON.stringify(Usuario, null, 4)}</pre>
            </div>
        </div>
    );
};
