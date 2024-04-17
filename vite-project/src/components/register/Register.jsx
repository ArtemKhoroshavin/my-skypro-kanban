import React, { useState } from 'react'
import { Wrapper } from '../Common.styled'
import { ContainerSignin, FormLogin, Modal, ButtonLogin } from './Register.styled'
import { ModalBlock, ModalTtl, ModalInput, FormGroup } from '../auth/Login.styled'
import { Link } from 'react-router-dom'
import { paths } from '../../lib/constsns'
import { authorize } from '../../api'

const Register = ({createUser}) => {

const [name, setName] = useState("")
const [login, setLogin] = useState("")
const [password, setPassword] = useState("")



const handleSubmit = async (event) => {
	event.preventDefault();
  }

  const regUser = async () => {
	await authorize({name,login,password}).then((responseData)=>{createUser(responseData.user)
	console.log("регистрация успешна")
	})

  }

  return (
      <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtl>
						<h2>Регистрация</h2>
					</ModalTtl>
					<FormLogin onSubmit={handleSubmit}>
                	<ModalInput 
						type="text" 
						name="first-name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Имя">
						
					</ModalInput>
						<ModalInput 
						type="text" 
						name="login"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
						placeholder="Эл. почта">

					</ModalInput>
					<ModalInput 
						type="password" 
						name="password" 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Пароль">

					</ModalInput>
						<ButtonLogin onClick={regUser}>Зарегистрироваться</ButtonLogin>
						<FormGroup>
							<p>Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link></p>
						</FormGroup>
                    </FormLogin>
				</ModalBlock>
			</Modal>
        </ContainerSignin>
    </Wrapper>
  )
}

export default Register
