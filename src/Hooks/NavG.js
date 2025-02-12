import { useNavigate } from "react-router-dom"
export const NavG = () => {
    const navigate = useNavigate();

    const Pagenext =() => {
        navigate('/flores')
    }

    const PageEnd = () =>{
        navigate('/final')
    }
    return{
        Pagenext,
        PageEnd
    }
}
