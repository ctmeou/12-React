import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callLoginAPI} from "../../api/UserAPICalls";
import {useNavigate} from "react-router-dom";

function LoginForm() {

    const isLogin = !!localStorage.getItem('isLogin'); //!! : boolean으로 type 변환

    const dispatch = useDispatch(); //useDispatch 호출을 통해 함수를 받아온다.
    const navigate = useNavigate();
    const result = useSelector(state => state.userReducer);

    //사용자 입력 양식을 만들어 놓고 필요할 때 사용하기 때문에 store에 저장하지 않고 상태 변화만 확인하면 된다.
    const [loginInfo, setLoginInfo] = useState({ //useState에 관리하고자 하는 객체 선언
        id : '',
        password : ''
    });

    useEffect(() => {
        if (isLogin) {
            //화면 렌더링 시 로그인된 user이면 main 화면으로 보내준다.
            navigate('/')
        } else if (result?.message === 'LOGIN_FAIL') { //?. : 뒤에 비워있는 값은 처리하지 않는다.
            alert('아이디와 비밀번호를 확인해주세요!'); //result에 따라 원하는 문구를 띄워준다.
            setLoginInfo({
                id: '',
                password: ''
            });
        }
    }, [result]); //useReducer([result])가 변화했을 때 다시 실행해서 확인

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