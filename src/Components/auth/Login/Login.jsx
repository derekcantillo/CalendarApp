import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


export const Login = () => {
    return (
        <div className="container" id="container">

	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Inicio de sesión</h1>
			
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">¿Olvidaste tu contraseña?</a>
            
			
			<button>Iniciar sesión</button>
            <div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">

			<div className="overlay-panel overlay-right">
				<h1>CalendarApp!</h1>
				<p>Si no te has registrado y quieres registrarte, Dale click en el botón de abajo</p>
				<Link to="/register" className="ghost" id="signUp">Regístrarse</Link>
			</div>
		</div>
	</div>
</div>
    )
}