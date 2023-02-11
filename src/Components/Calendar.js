import '../styles/index.css';
import { useState, useEffect } from "react";

export default function Calendar(props){
    const [date, setDate] = useState(props.date);
    const [selectedDate, setSelectedDate] = useState(props.date.getDate());

    useEffect(()=>{
        setDate(props.date);
        setSelectedDate(props.date.getDate());
    },[props])
    
    //stores the names of all months in a year.
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']; 

    // returns the number of days in a given month and year
    const daysInMonth = (month, year)=>{
        return new Date(year, month+1, 0).getDate();
    }; 

    // returns the day of the week for the first day of a given month and year.
    const getWeekDay = (month, year)=>{
        return new Date(year, month, 1).getDay();
    }; 

    // creates calendar elements to be displayed
    const createCalendar = (month, year) => {
        const calendar = [];
        const days = daysInMonth(month, year); // no of days in the month
        const startWeekDay = getWeekDay(month, year); // starting day of the week for the first day of the month
        let day = 1;

        for(let i=0;i<6;i++){
            const week=[]; // array to represent the days of the week

            for(let j=0;j<7;j++){
                if(i === 0 && j < startWeekDay){ //current day of the week is before the first day of the month
                    week.push(<td key={j}></td>); // empty
                }
                else if(day <= days){ // current day of the week is within the days of the month
                    week.push(
                        <td         // displays the day and sets the 'today' class if the day is equal to the selected date.
                         key={j} 
                         className={day === selectedDate ? 'today':'not_today'} 
                         onClick={()=>setSelectedDate(day)}
                        >
                         {day}
                        </td>
                    );
                    day++;
                }
                else
                {
                    break;
                }
            }
            calendar.push(<tr key={i}>{week}</tr>);
        }
        return calendar;
    };

    return(
        <div className="calendar">
            <div className="calendar-header">
                <table className="calendar-table">
                    <thead>
                        <tr className="calendar-title-row">
                            <th colSpan="7">
                                <h4 className="calendar-title not_today">
                                    {monthNames[date.getMonth()]} {date.getFullYear()} {/* header with month and year */}
                                </h4>
                            </th>
                        </tr>
                        
                        <tr className="calendar-day-of-week-header not_today">
                            <th>Su</th>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                        </tr>
                    </thead>
                        
                        <tbody>{createCalendar(date.getMonth(), date.getFullYear())}</tbody> {/*creates calendar table*/}
                </table>
            </div>
        </div>
    );
};
