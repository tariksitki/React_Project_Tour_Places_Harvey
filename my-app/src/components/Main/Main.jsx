
import "./Main.scss";
    /// export da default olmadigi icin {} ile cekiyoruz
import {data} from "../../helpers/data";
import Card from "./Card";


const Main = () => {
    return (
        <div className="card-container">
            {data.map((item, index) => <Card {...item} key = {index} /> )}
        </div>
    )
};
export default Main;
