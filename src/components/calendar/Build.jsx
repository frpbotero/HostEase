export default function build (monthsOfYearCard) {
    
    const calendar = []

    const initialDayOfMonthCard = monthsOfYearCard.clone().startOf('month').startOf('week') //dia início do card

    const finaDayOfMonthCard = monthsOfYearCard.clone().endOf('month').endOf('week') //dia fim do card

    const day = initialDayOfMonthCard.clone().subtract(1, 'day')

    while (day.isBefore(finaDayOfMonthCard, 'day')) {
        calendar.push(Array(7).fill(0).map(() => day.add(1, 'day').clone()))
    }
    return(calendar)
}

