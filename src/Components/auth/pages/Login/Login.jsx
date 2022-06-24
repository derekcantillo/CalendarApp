import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const Login = () => {
	const navigate = useNavigate()
	
	const handleLogin=()=>{
		Swal.fire('Logueo Exitoso', 'No estás autenticado', 'success')
		
	}
    return (
        <div className="__auth container" id="container">

			<div className="__auth form-container sign-in-container">
				<form action="#">
					<h1>Inicio de sesión</h1>
					
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<a href="#">¿Olvidaste tu contraseña?</a>
					
					
					<button className="__auth button" onClick={handleLogin}>
						<Link to='/'>
						</Link>
						Iniciar sesión</button>
					<div className="__auth social-container">
						<a href="#" className="__auth social"><i className="fab fa-facebook-f"></i></a>
						<a href="#" className="__auth social"><i className="fab fa-google-plus-g"></i></a>
						<a href="#" className="__auth social"><i className="fab fa-linkedin-in"></i></a>
					</div>
				</form>
			</div>
			<div className="__auth overlay-container">
				<div className="__auth overlay">

					<div className="__auth overlay-panel overlay-right">
						<h1>CalendarApp!</h1>
						<p>Si no te has registrado y quieres registrarte, Dale click en el botón de abajo</p>
						<Link 	to="/auth/register" 
								className="__auth ghost" 
								id="signUp"
								onClick={handleLogin}
						>
						Regístrarse
						</Link>
					</div>
				</div>
			</div>
</div>
    )
}