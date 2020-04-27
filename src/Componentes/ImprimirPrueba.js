import React, { Component } from 'react';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

class ImprimirPrueba extends Component {
    
    imprimir=()=>{
        const  doc = new jsPDF("p", "pt", "letter")
        doc.autoTable({ html: '#table_upg_epg' })
        doc.save('table.pdf')        
    }

    render() { 
        return (  
            <button onClick={()=>{this.imprimir()}}>Imprimir Prueba</button>
        );
    }
}
 
export default ImprimirPrueba;