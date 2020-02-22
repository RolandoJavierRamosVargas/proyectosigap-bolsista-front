import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App';
//import AppCodigo from './Componentes/AppCodigo';
import AppNueva from './Componentes/AppNueva';
import AppNueva2 from './Componentes/AppNueva2';
import LoginFormNombreApellidos from './Componentes/LoginFormNombreApellidos';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory,Redirect } from 'react-router-3';
import {Route } from 'react-router-dom';
import LoginForm from './Componentes/LoginForm';
import LoginApp from './Componentes/LoginApp';
import VistaTablaNuevo from './Componentes/VistaTablaNueva';
import VistaIntermedia from './Componentes/seleccion-intermedia';
import VistaIntermediaLoginAlumno from './Componentes/seleccion_intermedia_login_alumno';
import ComponenteEditable from './Componentes/ComponenteEditable';
import Formulario from './Componentes/formulario';
import VistaSeguimientoEgresado from './Componentes/VistaSeguimientoEgresado';
import AsignarPresupuesto from './Componentes/AsignarPresupuesto';
import ImportePagos from './Componentes/Importe-Pagos';
import RegistroCostoPrograma from './Componentes/RegistroCostoPrograma';
import RegistroPresupuesto from './Componentes/RegistroPresupuesto';


const isLogged = () => {
    const user = localStorage.getItem('user');
    if(!user) {
        
        return false
    }
    return true
}
  const isAlumno = () => {
    const tipo = localStorage.getItem('tipo');
    if(tipo!='alumno') {
        
        return false
    }
    return true
  }



class Index extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                {/* ****************************************** */}
                <Route
                    component={() => <LoginApp />} //LoginForm
                    path="/">
                </Route>
                
                {/* ****************************************** */}

                <Route path="/:name" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <App {...props} />
                    )
                }
                }></Route>
                {/* ****************************************** */}
                
                {/* ****************************************** */}
                <Route path="/filtro/:name" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <VistaIntermedia {...props} />
                    )
                }
                }></Route>
                {/* ****************************************** */}


                <Route path="/filtro/:name/:cod" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <VistaIntermediaLoginAlumno {...props} />
                    )
                }
                }></Route>
                {/* ****************************************** */}

                <Route path="/vista/programas" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <VistaIntermediaLoginAlumno {...props} />
                    )
                }
                }></Route>
                {/* ****************************************** */}
                <Route path="/vista/nueva" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <AppNueva {...props} />
                    )
                }
                }>
                </Route>
                {/* ****************************************** */}

                
                


                
                {/* <AuthRoute  component={AppNueva2}  path="/vista/nueva2"> </AuthRoute> */}

                <Route path="/vista/nueva2" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <AppNueva2 {...props} />
                    )
                }
                }> </Route>
                {/* ****************************************** */}

                <Route path="/vista/tabla" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <VistaTablaNuevo {...props} />
                    )
                }
                }></Route>
                 {/* ****************************************** */}
                <Route path="/vista/loginNyA" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <LoginFormNombreApellidos {...props} />
                    )
                }
                }>
                </Route>
                {/* ****************************************** */}
                <Route path="/vista/imprimir" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <ComponenteEditable {...props} />
                    )
                }
                }>
                    
                </Route>
                 {/* ****************************************** */}
                <Route path="/formulario/:codigo" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <Formulario {...props} />
                    )
                }
                }></Route>          
                
                 {/* ****************************************** */}
                <Route path="/:name/vista/egresado" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <VistaSeguimientoEgresado {...props} />
                    )
                }
                }></Route>
                 {/* ****************************************** */}

               
                <Route path="/:name/vista/importe" component={(props)=>{
                    if(!isLogged()) {                        
                        return (    
                            <LoginApp />
                        )
                    }
                    return (
                        <ImportePagos {...props} />
                    )
                }
                }></Route>

                {/* ****************************************** */}

                <Route path="/vista/loginFormAdmi" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <LoginForm {...props} />
                    )
                }
                }></Route>
                 {/* ****************************************** */}


                <Route path="/vista/loginApp" component={LoginApp}></Route>

                
                <Route path="/vista/presupuesto" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <AsignarPresupuesto {...props} />
                    )
                }
                }></Route>
                 {/* ****************************************** */}
                <Route path="/vista/presupuestoRegistro" component={(props)=>{
                    console.log("props ->",props);
                    
                    if(!isLogged() || isAlumno()) {                        
                        return (
                            <React.Fragment>
                                <LoginApp />

                            </React.Fragment>
                        )
                    }
                    return (
                        <RegistroPresupuesto {...props} />
                    )
                }
                }></Route>
	

          </Router>
          )
      }
      
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));
//ReactDOM.render(<RegistroCostoPrograma />, document.getElementById('root'));

registerServiceWorker();