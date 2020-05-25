import {useState, useEffect} from 'react';
import  axios from "axios";


export const userMouseMove = () => {
    const [position,setPosition] = useState({x:0, y: 0})
    useEffect(() => {
        let updateMouse = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            })
        };
        document.addEventListener('mousemove', updateMouse);
        return () => {
            document.removeEventListener('mousemove', updateMouse);
        };
    }, []); //todo 传入空数组不会重复执行

    return position;
};


export const useUrlLoader = (api,deps) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        if(!loading){
            setLoading(true);
            axios.get(api).then((result)=>{
                setData(result.data);
                setLoading(false);
            })
        }

    }, deps);

    return [data, loading];
};

export default userMouseMove;
