import {useState} from "react";
import {useDispatch} from "react-redux";
import {callLoginAPI} from "../../api/UserAPICalls";

function LoginForm() {

    const dispatch = useDispatch(); //useDispatch 호출을 통해 함수를 받아온다.

    //사용자 입력 양식을 만들어 놓고 필요할 때 사용하기 때문에 store에 저장하지 않고 상태 변화만 확인하면 된다.
    const [loginInfo, setLoginInfo] = useState({ //useState에 관리하고자 하는 객체 선언
        id : '',
        password : ''
    });

    const onChangeHandler = e => { //기존 값 그대로 받아온 후, 이벤트가 발생한 부분에 대한 정보만 추가 입력
        setLoginInfo({
            ...loginInfo,
            [e.target.name] : e.target.value
        })
    }

    const onClickHandler = () =>{
        dispatch(callLoginAPI(loginInfo)); //사용자 입력 양식에 따라 관리되고 있던 loginInfo를 call할 API에 전달(UserAPICalls)
    }

    //입력 양식이 변화할 때마다 관리가 된다.
    return (
        <div>
            <label>ID : </label>
            <input
                type="text"
                name="id"
                onChange={ onChangeHandler }
                value={ loginInfo.id }
            />
            <label>PASSWORD : </label>
            <input
                type="password"
                name="password"
                onChange={ onChangeHandler }
                value={ loginInfo.password }
            />
            <button onClick={ onClickHandler }>로그인</button>
        </div>
    );

}

export default LoginForm;