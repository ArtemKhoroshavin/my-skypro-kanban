import { Link, useNavigate } from "react-router-dom"
import { paths } from "../../lib/constsns"
import CalendarContent from "../calendar/Calendar"
import { NewCard, NewCardBlock, NewCardContainer, NewCardContent, NewCardClose, NewCardWrap, NewCardForm, NewCardFormBlock, NewCardFormTitle, NewCardFormInput, NewCardFormTextArea, CreateNewBtn, NewCardCategoris, NewCardCategorisThemes, NewCardCategorisTheme} from "./CreatedTasks.styled"
import { useState } from "react"
import { addTaskApi } from "../../api"
import { useUserContext } from "../../contexts/hooks/useUser"
import { useTasksContext } from "../../contexts/hooks/useTasks"

export function CreatedTask() {

const {user} = useUserContext()

const {createNewTask}  = useTasksContext()

const [selected, setSelected] = useState("");

// const [nameTask, setNameTask] = useState("")
// const [description, setDescription] = useState("")

const [newTask, setNewTask] = useState({
    title:"",
    topic:"",
    description:""
 
})


  const createTask = async (event) => {
     event.preventDefault();
     const tasks = {...newTask, date: selected};
	 addTaskApi({tasks, token: user?.token}).then((responseData)=>{(console.log(responseData.tasks))
    })

  }

    return (
        <NewCard>
        <NewCardContainer>
            <NewCardBlock>
                <NewCardContent>
                    <h3>Создание задачи</h3>
                    <NewCardClose><Link to={paths.MAIN}>ЗАКРЫТЬ</Link></NewCardClose>
                    <NewCardWrap>
                        <NewCardForm action="#">
                            <NewCardFormBlock>
                                <NewCardFormTitle>Название задачи</NewCardFormTitle>
                                <NewCardFormInput 
                                		type="text" 
                                        name="title"
                                        onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                        placeholder="Введите название задачи...">
                                </NewCardFormInput>
                            </NewCardFormBlock>
                            <NewCardFormBlock>
                                <NewCardFormTitle>Описание задачи</NewCardFormTitle>
                                <NewCardFormTextArea 
                                    	type="text" 
                                        name="description"
                                        onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                                        placeholder="Введите описание задачи...">
                                </NewCardFormTextArea>
                            </NewCardFormBlock>
                        </NewCardForm >
         
                               <CalendarContent selected={selected} setSelected={setSelected}/>
                                
                    </NewCardWrap>
                    <NewCardCategoris>
                        <p>Категория</p>
                        <NewCardCategorisThemes>
                            <label>Research <input type="radio" value = "Research"/></label>
                            <label>Copywriting<input type="radio" value = "Copywriting"/></label>
                            <label>Web Design<input type="radio" value = "Web Design"/></label>
                            {/* <NewCardCategorisTheme $theme={topic}>
                                <p>{topic}Web Design</p>
                            </NewCardCategorisTheme>
                            <NewCardCategorisTheme>
                                <p>{topic}Research</p>
                            </NewCardCategorisTheme>
                            <NewCardCategorisTheme>
                                <p>{topic}Copywriting</p>
                            </NewCardCategorisTheme> */}
                        </NewCardCategorisThemes>
                    </NewCardCategoris>
                    <CreateNewBtn onClick={createTask}>Создать задачу</CreateNewBtn>
                </NewCardContent>
            </NewCardBlock>
        </NewCardContainer>
    </NewCard>
    )
}
export default CreatedTask