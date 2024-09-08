import Notfound from "../media/nf1.svg";

const notfound = () =>{
    return(
        <div className="notfoundbox">
            <div className="notfound">
            <img src={Notfound} alt="My Icon" width={450} />
            </div>
        </div>
        
    );
}
export default notfound;