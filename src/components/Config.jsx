import { useState } from "react"

const Config = ({ btn }) => {
    const [config, setConfig] = useState(false);

    const configclick = () => {
            if(!config) setConfig(true);
            else setConfig(false);
    }

    return (
        <>
            <div className="adminbtn" style={{width: !btn ? "0%" : "10%", boxShadow: !btn ? "none" : "rgb(0,0,0) 0px 0px 0px 1px"}} onClick={configclick}>Config.</div>
            <div className="config" style={{height: !config ? "0vh" : "80vh", boxShadow: !config ? "" : "rgb(0,0,0) 0px 0px 0px 2.5px"}}></div>
            <div className="blurback" style={{display: !config ? "none" : "block"}}></div>
            <div className="config-btn" style={{display: !config ? "none" : "block"}} onClick={configclick}>
                <div className="bar" style={{transform: "translate(0, 5px) rotate(-45deg)"}}></div>
                <div className="bar" style={{transform: "translate(0, -5px) rotate(45deg)"}}></div>
            </div>
            <div className="config-tab" style={{display: !config ? "none" : "flex", flexWrap: !config ? "nowrap" : "wrap", left: !config ? "0px" : "150px"}}>Cadastrar</div>
            <div className="config-tab" style={{display: !config ? "none" : "flex", flexWrap: !config ? "nowrap" : "wrap", left: !config ? "0px" : "260px"}}>Editar</div>
            <div className="config-tab" style={{display: !config ? "none" : "flex", flexWrap: !config ? "nowrap" : "wrap", left: !config ? "0px" : "370px"}}>Deletar</div>
        </>
    )
}

export default Config