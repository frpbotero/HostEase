import { useEffect, useState } from 'react'
import moment from 'moment'
// import Holiday from '../services/Holiday'

export default function CardsOfDays(props) {
  // const [holidays, setHolidays] = useState([])
  const [today, setToday] = useState('')
  const [dayBtn, setDayBtn] = useState('')
  const day = props.day._d

  const handleClickDate = () => {
    if (dayBtn !== 'noInMonth') {
      if (props.checkDate.find((value) => value.getTime() === day.getTime())) {
        setDayBtn('')
        props.setCheckDate(props.checkDate.filter((value) => value.getTime() !== day.getTime()))
      } else {
        setDayBtn('ok')
        props.setCheckDate([...props.checkDate, day])
      }
    }
  }
  useEffect(() => {
    const currentMonth = new Date(props.month + ',01,' + props.year)
    if (day.getMonth() !== currentMonth.getMonth()) {
      setDayBtn('noInMonth')
      return
    }
    const currentDay = new Date(moment().format('MM/DD/YYYY'))
    if (day.getTime() === currentDay.getTime()) {
      setToday('today')
    }
    props.checkDate.find((value) => value.getTime() === day.getTime()) ? setDayBtn('ok') : setDayBtn('')
  }, [[day, props.checkDate, props.month, props.year]])

  return (
    <div onClick={handleClickDate} className={`cursor-pointer select-none	font-semibold w-[27px] h-[27px] rounded-lg ${dayBtn == 'ok' ? 'bg-yellow-200' : ''} ${dayBtn === 'noInMonth' ? 'text-gray-50 cursor-not-allowed' : ''} ${today === 'today' ? 'bg-blue-200' : ''}`}>
      {props.day.format('DD').toString()}
      {/* <Holiday holidays={holidays} setHolidays={setHolidays} /> */}
    </div>
  )
}