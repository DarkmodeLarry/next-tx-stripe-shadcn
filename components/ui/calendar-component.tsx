'use client'

import ReactCalendar from 'react-calendar'
import { useState } from 'react'

import { add, format, formatISO, isBefore, parse } from 'date-fns'
import {
  OPENING_HOURS_INTERVAL,
  SELECTED_CLOSING_TIME,
  SELECTED_OPENING_TIME
} from '@/constants/config'

// import type {DateTime} from '@/utils/types'

type CalendarProps = {}

interface SelectedType {
  selectedDate: Date | null
  selectedDateTime: Date | null
}

const CalendarComponent = ({}) => {
  const [date, setDate] = useState<SelectedType>({
    selectedDate: null,
    selectedDateTime: null
  })

  console.log(date.selectedDateTime)
  const getTimes = () => {
    if (!date.selectedDate) return

    const { selectedDate } = date

    const openingTime = add(selectedDate, { hours: SELECTED_OPENING_TIME })
    const closingTime = add(selectedDate, { hours: SELECTED_CLOSING_TIME })
    const interval = OPENING_HOURS_INTERVAL // in minutes

    const times = []
    for (let i = openingTime; i <= closingTime; i = add(i, { minutes: interval })) {
      times.push(i)
    }

    return times
  }

  const times = getTimes()

  return (
    <div className='flex flex-col items-center w-full h-screen mt-16'>
      {date.selectedDate ? (
        <div className='flex flex-wrap gap-3 m-4'>
          {times?.map((time, i) => (
            <div
              key={`time-${i}`}
              className='flex flex-col items-center justify-center w-24 h-10 rounded-sm bg-gray-3'
            >
              <button
                type='button'
                onClick={(date) => setDate((prev) => ({ ...prev, selectedDateTime: time }))}
                className=''
              >
                {format(time, 'p')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className='p-2 REACT-CALENDAR'
          view='month'
          onClickDay={(date) => setDate((prev) => ({ ...prev, selectedDate: date }))}
        />
      )}
    </div>
  )
}

export default CalendarComponent
