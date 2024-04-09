import React from 'react'
import { Wrapper } from '../Common.styled'
import { ContainerSignin, FormLogin, Modal, ButtonLogin } from './Register.styled'
import { ModalBlock, ModalTtl, ModalInput, FormGroup } from '../auth/Login.styled'
import { Link } from 'react-router-dom'
import { paths } from '../../lib/constsns'

const Register = () => {
  return (
      <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtl>
						<h2>Регистрация</h2>
					</ModalTtl>
					<FormLogin>
                    <ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"></ModalInput>
						<ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"></ModalInput>
						<ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"></ModalInput>
						<ButtonLogin>Зарегистрироваться</ButtonLogin>
						<FormGroup>
							<p>Уже есть аккаунт?  <Link to={paths.LOGIN}>Войдите здесь</Link></p>
						</FormGroup>
                    </FormLogin>
				</ModalBlock>
			</Modal>
        </ContainerSignin>
    </Wrapper>
  )
}

export default Register
