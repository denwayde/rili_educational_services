import React from 'react'
import logo_main from '../img/logo_main.png'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src={logo_main} alt="rili_logo" width="30" height="24" class="d-inline-block align-text-top me-1"/>
                        <span className='navbar-brand-span'>ГБОУ РИЛИ</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Курсы</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Краткосрочные школы</a>
                        </li>
                    </ul>
                    <div>
                        <a href='#'>
                            <button className="btn btn-outline-danger" type="submit">Оставить заявку</button>
                        </a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
