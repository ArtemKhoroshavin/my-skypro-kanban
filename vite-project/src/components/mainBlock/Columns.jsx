import Cards from "./Cards";
import { ColumnMain, ColumnTitle } from "./Columns.styled";

								

function Columns({status, tasks}) {

    return (
		<ColumnMain>
			<ColumnTitle>
			<p>{status}</p>
			</ColumnTitle>
			{tasks.map((task)=> <Cards key={task._id}{...task}/>)}
		</ColumnMain>					

    )
}
export default Columns

