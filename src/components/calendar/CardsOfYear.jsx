import moment from 'moment'
import { useEffect, useState } from 'react'
import build from './Build'
import Days from './CardsOfDays'


export const CardsOfYear = (props) => {

    const [monthsOfYearCard, setMonthsOfYearCard] = useState(moment().locale('pt-br').month(props.month).year(props.currentYear))
    const [weeks, setWeeks] = useState([]) //forma de renderizar as semanas
    const daysOfTheWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'] //dias da semana impressos no calendário

    useEffect(() => {
        setMonthsOfYearCard(monthsOfYearCard.year(props.currentYear))
        setWeeks(build(monthsOfYearCard))
    }, [monthsOfYearCard, props.currentYear])

    return (
        <div className='pb-10'>
            <div className='w-[300px] h-full p-3 rounded-lg shadow-xl transition duration-300 ease-out hover:ease-in hover:shadow-2xl hover:border hover:border-purple-100' id='month-card'>
                <div className='text-gray-500 text-center pb-5 font-extrabold'>{monthsOfYearCard.format('MMMM')}</div> {/* Meses impressos em PT-BR*/}
                <hr className='pb-1 bg-purple-100'/> {/* Barra que faz o bg dos dias */}
                <div className='grid grid-cols-7 pt-2 pb-3 bg-pink-50 font-bold text-center'>{daysOfTheWeek.map(position => (<div key={position}>{position}</div>))}</div> {/* Dias da semana */}
                {weeks.map((week, key) => (
                <div key={key} className='grid bg-gray-50 grid-cols-7 text-green-700 grid-cols-end-2 p-2 place-items-center text-center'> 
                    {week.map(day => (<Days key={day._d.getTime() + props.month} day={day} month={props.month} year={props.currentYear} checkDate={props.checkDate} setCheckDate={props.setCheckDate} />))}
                </div>
                ))
                }
            </div>
        </div>
    )
}
