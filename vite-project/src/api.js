const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"

export async function getTodoes() {
    const response = await fetch (
        "https://wedev-api.sky.pro/api/kanban",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    if (response.status===400) {
        throw new Error ("Пользователь с таким логином уже сущетсвует")
    }
    else if(!response.ok) {
        throw new Error ("Что-то сломалось")
    }
    const responseData = await response.json();
    return responseData
}


//войти
export async function logon({login,password}) {
    const response = await fetch (
        "https://wedev-api.sky.pro/api/user/login",{
            method: "POST",
            
            body: JSON.stringify({
                login,
                password
              })
        }
    )
    if (response.status===400) {
        throw new Error ("Неправильный логин или пароль")
    }
    else if(!response.ok) {
        throw new Error ("Что-то сломалось")
    }
    const responseData = await response.json()
    return responseData
}

export async function authorize({name,login,password}) {
    const response = await fetch (
        "https://wedev-api.sky.pro/api/user",{
            method: "POST",
            body: JSON.stringify({
                name,
                login,
                password
              })
        }
    )
    if (!response.ok) {
        throw new Error ("ошибка")
    }
    const responseData = await response.json()
    return responseData
}