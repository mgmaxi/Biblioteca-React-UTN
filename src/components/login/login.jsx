import React from "react";

export class Login extends React.Component {
    constructor(props) {
        super(props);
}

render() {
    return ( 
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Inicio de Sesión</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Nombre</label>
                            <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Iniciar Sesión</button>
            </div>
        </div>
    );
}
};