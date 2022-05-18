import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import 'animate.css';
export const Register = () => {
  return (
    <div className="container animate__fadeInRight" id="container">
	<div className="form-container-up sign-up-container">
		<form action="#">
			<h1>Crear Cuenta</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	
	<div className="overlay-container-up">
		<div className="overlay-up">
			
			<div className="overlay-panel-up overlay-left">
				<h1>CalendarApp!</h1>
				<p>Si ya tienes cuenta, click abajo</p>
				<Link to="/login" className="ghost" id="signUp">Iniciar sesión</Link>
			</div>
		</div>
	</div>
</div>
  )
}
