// import axios from 'axios'
// import moment from 'moment'
// import { useEffect } from 'react'

// export default function Holiday(props) {

//     const api = axios.create({ baseURL: 'https://brasilapi.com.br/api/feriados/v1/' })

//     useEffect(() => {
//         api.get(moment().format('YYYY')).then(({ data }) => {
//             props.setHolidays(data.map(hday => hday.date))
//         })
//     }, [])
// }