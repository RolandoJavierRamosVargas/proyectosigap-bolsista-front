import React,{Component} from 'react';
import {
    ModalFooter, ModalBody, ModalHeader, Modal, Button,Input, Container, Row, Col 
  } from 'reactstrap';
import { Async } from "react-async-await";
import CONFIG from '../Configuracion/Config'

class ListaCuentasPorCobrar2 extends Component{


    constructor(props){
        super(props)
        this.state={
            mostrarModal:false,
            filasSelec:[],
            notificacionCorre:{},
            numNotifi: 0,
            numCorrelativo:0,
            tempEnvio:{
                from:'',
                to:'',
                subject:'',
                body:''
            }


        }
    }
/****************************************** */
    componentWillMount =() =>{
        this.recogerNotificacionCorrelativos();
    }

/****************************************** */

  
    openModal = () => {
        this.setState({
            
          mostrarModal:true
        });
      }  

/****************************************** */
    closeModal = () => {
        this.setState({
          mostrarModal:false
        });
      }
    
/****************************************** */
    seleccionarOrDesseleccionar = () =>{
    var lista = this.props.listaCuentasPorCobrar;
    console.log("la lista es ->",lista[0]);
    var checks=document.getElementsByClassName("checkbox1");
    let isSelected=false;

    for (let index = 0; index < checks.length; index++) {
        checks[index].checked=!checks[index].checked;
        isSelected=checks[index].checked;    
        if(isSelected){ // si lo tenemos seleccionado entonces agregemos el row
                
                this.agregarRow(lista[index]);
                
            
        }else{ // si no lo tenenmos seleccionado entonces quitemos el row
            
                this.quitarRow(lista[index]);
            
        }
    }

    
        console.log("el state acutal es ->",this.state.filasSelec);
    
    
   }

/****************************************** */
   notificacionesElectronicas = () =>{

    
    this.openModal();
    
   }

/****************************************** */
  recogerNotificacionCorrelativos = () =>{
        fetch(CONFIG+"notificacion_correlativos/listar")
        .then(response=>{
            return response.json();
        })
        .then(respuesta=>{
            respuesta=respuesta[respuesta.length-1];
            let numCorrelativo=respuesta.n_correlativo;
            let anio=respuesta.anio;

            let numNotifi=numCorrelativo+anio;
            this.setState({
                notificacionCorre:respuesta,
                numNotifi,
                numCorrelativo
            })
        })
        .catch(error=>{
            console.err("hubo un error");
        })

    }

    
/****************************************** */
   guardarCambios = () =>{
    //   this.actualizarNotifiCorrelativos();
      this.enviarMensaje();
   }
   /****************************************** */
   
   actualizarNotifiCorrelativos = () =>{
    
    fetch(CONFIG+"notificacion_correlativos/actualizar",{
         headers: {
         'Content-Type': 'application/json'
         },
         method: "PUT",
         body: JSON.stringify({
             n_correlativo:this.state.numCorrelativo+1,
             anio:this.state.notificacionCorre.anio,
             l_ultimo:this.state.notificacionCorre.l_ultimo
         })
         } 
     )
     .catch(error=>{
         alert("Hubo un error");
     })
}
/****************************************** */
   insertarNotificacionDeudas = () =>{
    //    alert("se insertará en la tabla notificacion deudas");
    //    fetch(CONFIG+"notificacion_deudas/insertar",{
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         method: "POST,
    //         body: JSON.stringify({
    //             cod_alumno:,
    //             id_programa:,
    //             n_notificacion:,
    //             anio_notificacion:,
    //             fecha_notificacion:,
    //             id_moneda:,
    //             id_concepto:,
    //             importe_deuda:,
    //             l_ultimo:,
    //         })
    //         } 
    //     )
    //     .catch(error=>{
    //         alert("Hubo un error");
    //     })
   }
   /****************************************** */


   enviarMensaje = () =>{
    console.log("************************");
    const arreglo=[...this.state.filasSelec]
    console.log("el arreglo es ->",arreglo);
    console.log(JSON.stringify(arreglo));

    console.log("************************");
    
    fetch(CONFIG+"mail/sendMail",{
        headers: {
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            from: "electrofisi.fidelizacion@gmail.com",
            to: "rolandojavier.ramos@gmail.com",
            subject: "NOTIFICACION DE DEUDA N° 20",
            body: JSON.stringify(this.state.filasSelec).toString()
        })
        } )
    
}

/****************************************** */


   agregarRow = (row) =>{
    this.setState((state) =>{
        return {filasSelec:[...state.filasSelec,row]};
    })
    
}
/****************************************** */
    quitarRow = (row) =>{
    // const filasSelecActuales= [...this.state.filasSelec];
    this.setState((state)=>{
        return {filasSelec:[...state.filasSelec].filter(fila=> JSON.stringify(row) != JSON.stringify(fila) )}
    })
}
/****************************************** */
    agregarOquitarRow = (row) =>{
        let isChecked=this.state.filasSelec.includes(row)
        if(!isChecked){
            this.agregarRow(row);
            
        }else{
            this.quitarRow(row);
        }
    }
/****************************************** */
//     setField(e) {
//         console.log("El valor de  e es ",e);
    
// }
/****************************************** */
   modal = () =>{
       const notificacion="NOTIFICACION DEUDA "+this.state.numNotifi;
       const descripcion="ESTA ES UNA DESCRIPCION DE PRUEBA"
       
        return (
            <Modal isOpen={this.state.mostrarModal} toggle={this.closeModal}  
                      aria-labelledby="contained-modal-title-vcenter">
                      <div>
                      <ModalHeader toggle={this.closeModal}>Notificaciones Electronicas</ModalHeader>
                        <ModalBody>
                            
                                <Row>
                                    <Col sm="3">
                                        <h6><b>Asunto</b></h6>
                                    </Col>
                                    <Col sm="9">
                                        <Input type="text" defaultValue={notificacion} />          
                                    </Col>
    
                                </Row>
                                <Row>
                                    <Col sm="3">
                                        <h6><b>Para : </b></h6>
                                    </Col>
                                    <Col sm="9">
                                        <Input type="text" defaultValue={ this.state.filasSelec.length!=0 ? this.state.filasSelec[0].coe_alu_personal : 'No ha seleccionado ningun alumno' }/>          
                                    </Col>
    
                                </Row>
                                
                                <Row> 
                                    <h6 align="left" className=""><b>Descripcion</b></h6>
                                    <Input type="textarea" className="" name="text" id="exampleText" defaultValue={descripcion}/>
                                </Row>
                          
                          
                          
                        </ModalBody>
                        <ModalFooter>
                          <Button color="green" onClick={this.guardarCambios}>Enviar</Button><p></p>
                          <Button color="secondary" onClick={this.closeModal}>Salir</Button>
                      </ModalFooter>
                    </div>      
                  </Modal>
    
    
           )
       }
       
   

   
/****************************************** */

   render(){
    let listaCuenXCob=this.props.listaCuentasPorCobrar;
    return(
        <div className="">
            <button onClick={this.seleccionarOrDesseleccionar} className="waves-effect waves-light btn-small newbotonSeleccionar start mt-1">
            Seleccionar todo<i className="large material-icons left">check</i> ></button>

            <button onClick={this.notificacionesElectronicas} className="waves-effect waves-light btn-small newbotonSeleccionar start mt-1" disabled={this.state.filasSelec.length==0 ? true : false}>
            Notificar<i className="large material-icons left" >check</i> ></button>
            
            <hr></hr>
            <hr></hr>
            {/* ********************************************************** */}
            {this.modal()}
            {/* ********************************************************** */}
            <table className="table">
            <thead>
                <tr>
                    <th className="th">#</th>
                    <th className="th">Cod Alumno</th>
                    <th className="th">Ape. Paterno</th>
                    <th className="th">Ape. Materno</th>
                    <th className="th">Nom. alumno</th>
                    <th className="th">Numero Prioridad</th>
                    <th className="th">Sigla Programa</th>
                    <th className="th">Año de Ongreso</th>
                    <th className="th">Codigo perm</th>
                    <th className="th">Max. años de estudio</th>
                    <th className="th">Beneficio Otorgado</th>
                    <th className="th">Autorizacion</th>
                    <th className="th">Moneda</th>
                    <th className="th">Prioridad</th>
                    <th className="th">concepto</th>
                    <th className="th">Descrip. minima</th>
                    <th className="th">Importe por Pagar</th>
                    <th className="th">Importe Pagado</th>
                    <th className="th">Deuda</th>
                    <th className="th">No me acuerdo el nombre</th>
                    <th className="th">estado</th>
                    <th className="th">Correo electronico </th>
                    <th className="th">Correo electronico Personal</th>
                    <th className="th">Telefono movil</th>
                    <th className="th">Telefono Fijo</th>
                    <th className="th">Tipo de  Identidad</th>
                    <th className="th">Doc. Identidad Alumno</th>
                    <th className="th">Dir_tip_via</th>
                    <th className="th">Dir_tip_via_nom</th>
                    <th className="th">Direccion numero Puerta</th>
                    <th className="th">Direccion numero piso</th>
                    <th className="th">Direccion numero Departamento</th>
                    <th className="th">Direccion numero Manzana</th>
                    <th className="th">Direccion numero lote</th>
                    <th className="th">Direccion numero Km</th>
                    <th className="th">Dir tip loc</th>
                    <th className="th">Direccion tip loc nom</th>
                    <th className="th">Departamento</th>
                    <th className="th">Provincia</th>
                    <th className="th">Distrito</th>



                </tr>
            </thead>
            <tbody>
                {listaCuenXCob.map((row,key)=>(
                    <tr key={key}>
                        <td className="td">{key+1}</td>
                        <td className="td">{row.cod_alumno}</td>
                        <td className="td">{row.ape_paterno}</td>
                        <td className="td">{row.ape_materno}</td>
                        <td className="td">{row.nom_alumno}</td>
                        <td className="td">{row.n_prioridad}</td>
                        <td className="td">{row.sigla_programa}</td>
                        <td className="td">{row.anio_ingreso}</td>
                        <td className="td">{row.cod_perm}</td>
                        <td className="td">{row.max_anio_estudio}</td>
                        <td className="td">{row.beneficio_otorgado}</td>
                        <td className="td">{row.autorizacion}</td>
                        <td className="td">{row.moneda}</td>
                        <td className="td">{row.n_prioridad2}</td>
                        <td className="td">{row.concepto}</td>
                        <td className="td">{row.descripcion_min}</td>
                        <td className="td">{row.importe_xpagar}</td>
                        <td className="td">{row.importe_pagado}</td>
                        <td className="td">{row.deuda}</td>

                        <td className="td">
                        <form action="#">
                            <label className="row center-xs color_white">
                            <input
                                onClick={()=>
                                    {this.agregarOquitarRow(row)}
                                }
                                className="checkbox1"
                                
                                type="checkbox" />
                                <span> </span>
                            </label>
                        </form>
                        </td>

                        <td className="td">{row.estado}</td>
                        <td className="td">{row.coe_alumno}</td>
                        <td className="td">{row.coe_alu_personal}</td>
                        <td className="td">{row.tel_alu_movil}</td>
                        <td className="td">{row.tel_alumno}</td>
                        <td className="td">{row.des_doc_identidad}</td>
                        <td className="td">{row.did_alumno}</td>
                        <td className="td">{row.dir_tip_via}</td>
                        <td className="td">{row.dir_tip_via_nom}</td>
                        <td className="td">{row.dir_num_puerta}</td>
                        <td className="td">{row.dir_num_piso}</td>
                        <td className="td">{row.dir_num_dpto}</td>
                        <td className="td">{row.dir_num_mz}</td>
                        <td className="td">{row.dir_num_lote}</td>
                        <td className="td">{row.dir_num_km}</td>
                        <td className="td">{row.dir_tip_loc}</td>
                        <td className="td">{row.dir_tip_loc_nom}</td>
                        <td className="td">{row.departamento}</td>
                        <td className="td">{row.provincia}</td>
                        <td className="td">{row.distrito}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    
        
        </div>
      )
   }
    
}
export default ListaCuentasPorCobrar2;
