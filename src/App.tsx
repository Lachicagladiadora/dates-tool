import { useState } from "react"

const mapDateToYYMMDD = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
}

const mapYYMMDDToDate = (date: string): Date => {
  const separateDate = date.split('-')
  const [year, month, day] = separateDate
  const finalDate: Date = new Date()

  finalDate.setFullYear(Number(year))
  finalDate.setMonth((Number(month) - 1))
  finalDate.setDate(Number(day))

  return finalDate
}

const DAYS_OF_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function App() {
  const [firstDate, setFirstDate] = useState<Date>(new Date())
  const [secondDate, setSecondDate] = useState<Date>(new Date())

  const calculateDays = (date1: Date, date2: Date): string => {
    // mejorar considerando los anos bisiestos
    const year1 = date1.getFullYear() * 365
    const month1 = (date1.getMonth() + 1) * DAYS_OF_MONTH[date1.getMonth()]
    const day1 = date1.getDate()

    const year2 = date2.getFullYear() * 365
    const month2 = (date2.getMonth() + 1) * DAYS_OF_MONTH[date2.getMonth()]
    const day2 = date2.getDate()

    return `${Math.abs((year2 + month2 + day2) - (year1 + month1 + day1)).toFixed(1)}`
  }
  const calculateMonths = (date1: Date, date2: Date): string => {
    const year1 = date1.getFullYear() * 12
    const month1 = MONTH[date1.getMonth()]
    const day1 = date1.getDate() / DAYS_OF_MONTH[date1.getMonth()]

    const year2 = date2.getFullYear() * 12
    const month2 = MONTH[date2.getMonth()]
    const day2 = date2.getDate() / DAYS_OF_MONTH[date2.getMonth()]

    return `${Math.abs((year2 + month2 + day2) - (year1 + month1 + day1)).toFixed(1)}`
  }
  const calculateYears = (date1: Date, date2: Date): string => {
    const year1 = date1.getFullYear()
    const month1 = MONTH[date1.getMonth()] / 12
    const day1 = date1.getDate() / 365

    const year2 = date2.getFullYear()
    const month2 = MONTH[date2.getMonth()] / 12
    const day2 = date2.getDate() / 365

    return `${Math.abs((year2 + month2 + day2) - (year1 + month1 + day1)).toFixed(1)}`
  }

  return (
    <main style={{ display: "flex", gap: '20px', maxWidth: '1000px' }}>
      {/* menu */}
      <div>
        <p>Number of dates</p>
      </div>
      {/* content */}
      <div style={{ flex: '1' }}>
        <h1>Number of dates</h1>
        <p>Calculate the number of days between two dates</p>
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ border: 'solid 2px royalblue', padding: '10px' }}>
              <h2>First Date</h2>
              <label htmlFor="first-date" />
              <input id="first-date" type="date" value={mapDateToYYMMDD(firstDate)} onChange={(e) => setFirstDate(mapYYMMDDToDate(e.target.value))} />
            </div>
            <div style={{ border: 'solid 2px royalblue', padding: '10px' }}>
              <h2>Second Date</h2>
              <label htmlFor="second-date" />
              <input id="second-date" type="date" value={mapDateToYYMMDD(secondDate)} onChange={(e) => setSecondDate(mapYYMMDDToDate(e.target.value))} />
            </div>
          </div>
          <h3>Result in:</h3>
          <div >
            <p>Days: {calculateDays(firstDate, secondDate)}</p>
            <p>Year: {calculateMonths(firstDate, secondDate)}</p>
            <p>Year: {calculateYears(firstDate, secondDate)}</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
// hours
// minutes
// seconds
// miliseconds
// semanas