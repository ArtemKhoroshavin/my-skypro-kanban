import { useState } from "react"
import { HeaderBlock, HeaderBtnMain, HeaderMain, HeaderNav, HeaderPopUserSet, HeaderUser, UserButton, UserMail, UserThemInput, UserTheme } from "./Header.styled"
import { Container } from "../Common.styled"
import IsExit from "../exit/IsExit"
import { Link } from "react-router-dom"
import { paths } from "../../lib/constsns"


function Header({tasksList, setTasksList, user}) {


const [isOpen, setOpen] = useState(false)
const OpenUser =()=>{
	setOpen ((isOpen)=>!isOpen)
}

		function addTask() {
			const newTask = { 
				_id: tasksList.length+1,
				topic:"No name",
				title: "Новая задача", 
				date:"01.01.24",
				status:"Без статуса"
				}
			setTasksList([...tasksList, newTask])
		}


const [isUserExit, setExit] = useState(false)
const OpenExitWindow = () => {
	setExit ((isUserExit)=>!isUserExit)
}

    return (
     <HeaderMain>
		<Container>
		<HeaderBlock>
				<div className="header__logo _show _light">
					<Link to={paths.MAIN}>
						<img src="/logo.png" alt="logo" />
					</Link>
				</div>
					{/* <div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
					</div> */}
					<HeaderNav>
					<HeaderBtnMain onClick={addTask}> 
						Создать новую задачу
					</HeaderBtnMain>{

					}
						<HeaderUser onClick={OpenUser} >{user.name}</HeaderUser>
						{isOpen && 
						<HeaderPopUserSet id="user-set-target" >
							<p>Ivan Ivanov</p>
							<UserMail>ivan.ivanov@gmail.com</UserMail>
							<UserTheme>
								<p>Темная тема</p>
								<UserThemInput></UserThemInput>
							</UserTheme>
							<UserButton> <Link to={paths.EXIT}>Выйти</Link></UserButton>
						</HeaderPopUserSet>
						}
					</HeaderNav>
				</HeaderBlock>
		</Container>
	 </HeaderMain>
    )
}

export default Header
