import React from 'react'
import '../style.css'
import catadores_proximosfoto from '../../../assets/catadores_proximosfoto.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropDownOptions from './DropwDownOptions';

const CatadoresProximos = () => {
    return (
        <body>

            <form action="" className="search-bar">
                <input type="search" name="search" pattern=".*\S.*" required />
                <button className="search-btn" type="submit">
                    <span>Search</span>
                </button>
            </form>

            <div className='scroll'>
                <div className='infoS'>
                    <h1 className='titleBoxU'>Catadores proximos</h1>

                    <div className='reg-bt'>
                        <h2>regiao</h2>

                        <DropDownOptions />
                    </div>



                </div>
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>

                <hr />

                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
                <hr />
                <div className="boxUserProximos">
                    <img src={catadores_proximosfoto} alt="photo" />
                    <div className='boxInfoU'>
                        <h3>Eduardo</h3>
                        <p>Jandira</p>
                    </div>
                    <div className='buttonPosition'>
                        <button className='buttonBox'>Solicite</button>
                    </div>
                </div>
            </div>



        </body>
    )
}

export default CatadoresProximos