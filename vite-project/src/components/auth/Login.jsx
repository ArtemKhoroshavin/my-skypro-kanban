import { Link, useNavigate } from "react-router-dom"
import { paths } from "../../lib/constsns"
import { Wrapper } from "../Common.styled"
import { ContainerSignin, FormGroup, FormLogin, LoginBtn, Modal, ModalBlock, ModalInput, ModalTtl } from "./Login.styled"

function Login({setIsAuth}) {

const navigate = useNavigate()

function login() {
    setIsAuth(true)
    navigate(paths.MAIN)
}

    return (
        <>
       <Wrapper>
        <ContainerSignin>
            <Modal>
                <ModalBlock>
                    <ModalTtl>
                        <h2>Вход</h2>
                    </ModalTtl>
					<FormLogin>
                        <ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"></ModalInput>
						<ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"></ModalInput>
                        <LoginBtn type="button" onClick={login}>Войти</LoginBtn>
						<FormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={paths.REGISTER}>Регистрируйся здесь</Link>
						</FormGroup>
                    </FormLogin>
                </ModalBlock>
            </Modal>
        </ContainerSignin>
       </Wrapper>
         
        </>
    )
}
export default Login