import { Link } from "react-router-dom"
import { ExitBlock, ExitButtonNo, ExitButtonYes, ExitContainer, ExitForm, ExitFormGroup, ExitTtl, PopExit } from "./IsExit.styled"
import { paths } from "../../lib/constsns"

function IsExit({exitUser}) {

// 	const navigate = useNavigate()

// 	function exit() {
//     setIsAuth(true)
//     navigate(paths.LOGIN)
// }

    return (
       <PopExit  id="popExit">
		<ExitContainer>
			<ExitBlock>
					<ExitTtl>
					<h2>Выйти из аккаунта?</h2>
					</ExitTtl>
				
						<ExitForm>
						<ExitFormGroup>
								<ExitButtonYes onClick={exitUser}><Link to={paths.LOGIN}>Да, выйти</Link></ExitButtonYes>
								<ExitButtonNo><Link to ={paths.MAIN}>Нет, остаться</Link> </ExitButtonNo>
							</ExitFormGroup>
						</ExitForm>
					
			</ExitBlock>
		</ExitContainer>
	   </PopExit>
    )
}
export default IsExit