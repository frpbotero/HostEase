import { useState } from 'react'
import { CardsOfYear } from '../components/CardsOfYear'
import moment from 'moment'

const Calendar = () => {

    const [currentYear, setCurrentYear] = useState(parseInt(moment().format('YYYY')))
    const [checkDate, setCheckDate] = useState([])
    const monthX = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

    moment.updateLocale('pt-br', {
        months: ['JAN', 'FEV', 'MAR', 'ABR',
            'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    })


    return (
        <>
            <div className='grid grid-cols-3 fixed w-screen bg-pink-50 shadow-md shadow-purple-100 p-4'> {/* Grid dos anos */}
                <button onClick={() => setCurrentYear(currentYear - 1)} className='text-4xl text-gray-400 text-center transition duration-150 ease-out hover:ease-in hover:text-gray-300'> ← </button>
                <div className='text-center text-4xl font-bold text-gray-400'>{currentYear}</div>
                <button onClick={() => setCurrentYear(currentYear + 1)} className='text-4xl text-gray-400 text-center transition duration-150 ease-out hover:ease-in hover:text-gray-300'> → </button>
            </div>
            <div className='p-10'/>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center h-screen w-full'> {/* Posicionamento dos meses */}
                {monthX.map(value => (<CardsOfYear key={value} month={value} currentYear={currentYear} checkDate={checkDate} setCheckDate={setCheckDate} />))}
            </div>
        </>
    )
}

export default Calendar