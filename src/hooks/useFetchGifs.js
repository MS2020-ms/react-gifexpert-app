import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //useEffect: accion condicionada!!!
    //solo se ejecuta cuando el componente es renderizado por primera vez o cuando cambia la categoria
    useEffect(() => {
        //metodo en el helper
        getGifs(category)
            .then(gifs => {
                setState({
                    data: gifs,
                    loading: false
                })
            })
    }, [category])


    return state; //{data: [], loading: true}
}