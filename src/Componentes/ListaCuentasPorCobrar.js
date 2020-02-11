import React,{Component} from 'react';

class ListaCuentasPorCobrar extends Component{

    

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
                    <th>Sigla Programa</th>
                    <th>cod perm</th>
                    <th>Max. años de estudio</th>
                    <th>concepto</th>
                    <th>Importe Pagado</th>
                    <th>Importe por Pagar</th>
                    <th>Deuda</th>
                </tr>
            </thead>
            <tbody>
                {listaCuenXCob.map((row,key)=>(
                    <tr key={key}>
                        <td>{row.cod_alumno}</td>
                        <td>{row.ape_paterno}</td>
                        <td>{row.ape_materno}</td>
                        <td>{row.nom_alumno}</td>
                        <td>{row.sigla_programa}</td>
                        <td>{row.cod_perm}</td>
                        <td>{row.max_anio_estudio}</td>
                        <td>{row.concepto}</td>
                        <td>{row.importe_pagado}</td>
                        <td>{row.importe_xpagar}</td>
                        <td>{row.deuda}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
   }
    
}
export default ListaCuentasPorCobrar;
