/*Realizar este comando antes "yarn add react-datepicker@4.8.0 @types/react-datepicker@4.4.2"
Documentação: https://github.com/Hacker0x01/react-datepicker
Informar o import do DatePicker linha 5,6. ABAIXO*/
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton';
import './styles.css';


function SalesCard() {

const min = new Date(new Date().setDate(new Date().getDate() - 365));
const max = new Date();

    /* OBS: abaixo esta declaracao de um estado "const" declarado dado composto 
    "minDate - maxDate" atribuido e declarado com o set e após "useState" com a data de hoje*/
    /* "setMinDate" Altera o estado ou seja altera a data do calendario */
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                {/* Apos importar informar campos abaixo do DatePicker para que possa abrir o calendario */}
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        /* "setMinDate(date)" informado este set ira fazer com que altera a data do calendario */
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        /* "setMinDate(date)" informado este set ira fazer com que altera a data do calendario */
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                {/* Realizado import do "icones botoes" */}
                                <NotificationButton />
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                {/* Realizado import do "icones botoes" */}
                                <NotificationButton />
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                {/* Realizado import do "icones botoes" */}
                                <NotificationButton />
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>

    )
}

export default SalesCard;
