import { CalendarCell, CalendarCells, CalendarDayName, CalendarDaysNames } from "./Calendar.styled"

function CalendarContent() {
    return (
        <CalendarContent>
            <CalendarDaysNames>
                <CalendarDayName>пн</CalendarDayName>
                <CalendarDayName>вт</CalendarDayName>
                <CalendarDayName>ср</CalendarDayName>
                <CalendarDayName>чт</CalendarDayName>
                <CalendarDayName>пт</CalendarDayName>
                <CalendarDayName>сб</CalendarDayName>
                <CalendarDayName>вс</CalendarDayName>
            </CalendarDaysNames>
        <CalendarCells>
            <CalendarCell>28</CalendarCell>
            <CalendarCell>29</CalendarCell>
            <CalendarCell>30</CalendarCell>
            <CalendarCell>31</CalendarCell>
            <CalendarCell>1</CalendarCell>
            <CalendarCell>2</CalendarCell>
            <CalendarCell>3</CalendarCell>
            <CalendarCell>4</CalendarCell>
            <CalendarCell>5</CalendarCell>
            <CalendarCell>6</CalendarCell>
            <CalendarCell>7</CalendarCell>
            <CalendarCell>8</CalendarCell>
            <div className="calendar__cell _cell-day _weekend _active-day">9</div>
            <div className="calendar__cell _cell-day _weekend">10</div>
            <CalendarCell>11</CalendarCell>
            <CalendarCell>12</CalendarCell>
            <CalendarCell>13</CalendarCell>
            <CalendarCell>14</CalendarCell>
            <CalendarCell>15</CalendarCell>
            <div className="calendar__cell _cell-day _weekend">16</div>
            <div className="calendar__cell _cell-day _weekend">17</div>
            <CalendarCell>18</CalendarCell>
            <CalendarCell>19</CalendarCell>
            <CalendarCell>20</CalendarCell>
            <CalendarCell>21</CalendarCell>
            <CalendarCell>22</CalendarCell>
            <div className="calendar__cell _cell-day _weekend">23</div>
            <div className="calendar__cell _cell-day _weekend">24</div>
            <CalendarCell>25</CalendarCell>
            <CalendarCell>26</CalendarCell>
            <CalendarCell>27</CalendarCell>
            <CalendarCell>28</CalendarCell>
            <CalendarCell>29</CalendarCell>
            <div className="calendar__cell _cell-day _weekend">30</div>
            <div className="calendar__cell _other-month _weekend">1</div>
        </CalendarCells>
        </CalendarContent>
    )
}
export default CalendarContent