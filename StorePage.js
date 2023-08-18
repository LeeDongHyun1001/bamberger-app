import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Menus } from "./stlyedCom";

const StorePage = ({data, setTitle}) => {
    useEffect(()=>{
        setTitle(data["title"]);
        return(()=>{
            setTitle('햄버거');
        })
    },[setTitle, data])
    const navigate = useNavigate();
    return<>
        <div style={{display: "flex", justifyContent:"center",fontSize:"25px", marginTop:"40px"}}>
            <button 
                onClick={() => navigate(-1)}
                style={{
                    width:"130px", 
                    height:"50px", 
                    fontSize:"25px",
                    border:'none', 
                    background:'none',
                    cursor:"pointer",
                    borderBottom:"1px solid black",
                    marginRight: "40px"
                }}
            >뒤로가기</button>
            <p style={{borderBottom:"1px solid black", lineHeight:'50px'}}>
                <a href={data["link"]}>더 많은 메뉴 보러가기</a>
            </p>
        </div>
        <Menus>
            {data["menu"].map((menu, idx)=>{
                return <Menu key={idx}>
                    <img src={menu["burgerImg"]} alt="메뉴 이미지"></img>
                    <div>
                        <h3>{menu["burgerMenu"]}</h3>
                        <p>{menu["bugerDesc"]}</p>
                    </div>
                </Menu>
            })}
        </Menus>
    </>
}

export default StorePage;