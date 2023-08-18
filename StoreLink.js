import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {Item, Items} from './stlyedCom'

const StoreLink = () => {
    const contents = useSelector((state) => state.burgerContents)
    return(
        <Items>
            {contents.map((state, idx) => {
                return<Item key={idx}>
                    <NavLink to={state["route"]}>
                        <img src={state["img"]} alt={state["title"]+"이미지"}/>
                    </NavLink>
                    <p>{state["title"]}</p>
                </Item>
            })}
        </Items>
    )
}

export default StoreLink;