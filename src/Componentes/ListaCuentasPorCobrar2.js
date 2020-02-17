import React,{Component} from 'react';

class ListaCuentasPorCobrar2 extends Component{

    

   render(){
    let listaCuenXCob=this.props.listaCuentasPorCobrar;
    return(
        <table>
            <thead>
                <tr>
                    <th>Cod Alumno</th>
                    <th>Ape. Paterno</th>
                    <th>Ape. Materno</th>
                    <th>Nom. alumno</th>
                    <th>Numero Prioridad</th>
                    <th>Sigla Programa</th>
                    <th>Año de Ongreso</th>
                    <th>Codigo perm</th>
                    <th>Max. años de estudio</th>
                    <th>Beneficio Otorgado</th>
                    <th>Autorizacion</th>
                    <th>Moneda</th>
                    <th>Prioridad</th>
                    <th>concepto</th>
                    <th>Descrip. minima</th>
                    <th>Importe por Pagar</th>
                    <th>Importe Pagado</th>
                    <th>Deuda</th>
                    <th>estado</th>
                    <th>Correo electronico </th>
                    <th>Correo electronico Personal</th>
                    <th>Telefono movil</th>
                    <th>Telefono Fijo</th>
                    <th>Tipo de  Identidad</th>
                    <th>Doc. Identidad Alumno</th>
                    <th>Dir_tip_via</th>
                    <th>Dir_tip_via_nom</th>
                    <th>Direccion numero Puerta</th>
                    <th>Direccion numero piso</th>
                    <th>Direccion numero Departamento</th>
                    <th>Direccion numero Manzana</th>
                    <th>Direccion numero lote</th>
                    <th>Direccion numero Km</th>
                    <th>Dir tip loc</th>
                    <th>Direccion tip loc nom</th>
                    <th>Departamento</th>
                    <th>Provincia</th>
                    <th>Distrito</th>



                </tr>
            </thead>
            <tbody>
                {listaCuenXCob.map((row,key)=>(
                    <tr key={key}>
                        <td>{row.cod_alumno}</td>
                        <td>{row.ape_paterno}</td>
                        <td>{row.ape_materno}</td>
                        <td>{row.nom_alumno}</td>
                        <td>{row.n_prioridad}</td>
                        <td>{row.sigla_programa}</td>
                        <td>{row.anio_ingreso}</td>
                        <td>{row.cod_perm}</td>
                        <td>{row.max_anio_estudio}</td>
                        <td>{row.beneficio_otorgado}</td>
                        <td>{row.autorizacion}</td>
                        <td>{row.moneda}</td>
                        <td>{row.n_prioridad2}</td>
                        <td>{row.concepto}</td>
                        <td>{row.descripcion_min}</td>
                        <td>{row.importe_xpagar}</td>
                        <td>{row.importe_pagado}</td>
                        <td>{row.deuda}</td>
                        <td>{row.estado}</td>
                        <td>{row.coe_alumno}</td>
                        <td>{row.coe_alu_personal}</td>
                        <td>{row.tel_alu_movil}</td>
                        <td>{row.tel_alumno}</td>
                        <td>{row.des_doc_identidad}</td>
                        <td>{row.did_alumno}</td>
                        <td>{row.dir_tip_via}</td>
                        <td>{row.dir_tip_via_nom}</td>
                        <td>{row.dir_num_puerta}</td>
                        <td>{row.dir_num_piso}</td>
                        <td>{row.dir_num_dpto}</td>
                        <td>{row.dir_num_mz}</td>
                        <td>{row.dir_num_lote}</td>
                        <td>{row.dir_num_km}</td>
                        <td>{row.dir_tip_loc}</td>
                        <td>{row.dir_tip_loc_nom}</td>
                        <td>{row.departamento}</td>
                        <td>{row.provincia}</td>
                        <td>{row.distrito}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
   }
    
}
export default ListaCuentasPorCobrar2;
