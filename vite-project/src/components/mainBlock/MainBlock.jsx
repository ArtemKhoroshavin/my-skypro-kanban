import { useEffect, useState } from "react";
import Columns from "./Columns";
import { MainContainer, MainBlockWithContent, MainContent } from "./Main.styled";
import { Container } from "../Common.styled";
import Header from "../header/Header";




const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
];


function MainBlock({ tasksList, isLoading, setTasksList, showError, user }) {



	return (

		<MainContainer>
			<Header tasksList={tasksList} setTasksList={setTasksList} user={user}/>
			<Container>
			<MainBlockWithContent>
					<MainContent>
						{showError && (<p style={{color:"red"}}> Ошибочка...</p>)}

						{isLoading ? "Данные загружаются" : <>
							{statusList.map((status, index) =>
								<Columns status={status} key={index}
									 tasks={tasksList.filter((task) => task.status === status)}
								/>
							)
							}</>

						}
					</MainContent>
				</MainBlockWithContent>
			</Container>
		</MainContainer>
	)
}
export default MainBlock