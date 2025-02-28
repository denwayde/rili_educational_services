import React from 'react'
import ziazov from '../img/ziazov.jpg'
import algebra from '../img/algebra1.jpg'
import physics from '../img/physics1.jpg'
import info from '../img/info1.jpg'
import chem from '../img/chem.jpg'
import '../App.css'

function Body() {

    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='overlay my_card' style={{backgroundImage: `url(${ziazov})`}}>
                            <div class="card ">
                                <div className="card-body">
                                    <h5 className="card-title">Подготовительные курсы</h5>
                                    <p className="card-text">Курсы для ребят 4-6 классов, желающих поступить в РИЛИ.</p>
                                    <a href="#" className="btn btn-outline-light">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='overlay my_card' style={{backgroundImage: `url(${algebra})`}}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Курсы по математике</h5>
                                <p className="card-text">&#8203;</p>
                                <a href="#" className="btn btn-outline-light">Подробнее</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='overlay my_card' style={{backgroundImage: `url(${physics})`}}>
                        <div className="card my_card">
                            <div className="card-body">
                                <h5 className="card-title">Курсы по физике</h5>
                                <p className="card-text">&#8203;</p>
                                <a href="#" className="btn btn-outline-light">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                    <div className='overlay my_card' style={{backgroundImage: `url(${info})`}}>
                        <div className="card my_card">
                            <div className="card-body">
                                <h5 className="card-title">Курсы по информатике</h5>
                                <p className="card-text">&#8203;</p>
                                <a href="#" className="btn btn-outline-light">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='overlay my_card' style={{backgroundImage: `url(${chem})`}}>
                        <div className="card my_card">
                            <div className="card-body">
                                <h5 className="card-title">Курсы по химии</h5>
                                <p className="card-text">&#8203;</p>
                                <a href="#" className="btn btn-outline-light">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Body
