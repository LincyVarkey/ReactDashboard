import classnames from "classnames";
import { FaCaretDown } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";

const DataCard = ({data}) => {

    const {key, count, elavation} = data;

    return (
        <div className="data-card">
            <div className="data-card-name">{key.toUpperCase()}</div>
            <div className="data-card-count">{count}</div>
            <div className={classnames("data-card-elavation", {"is-up": elavation > 0}, {"is-down" : elavation < 0})}>
                {elavation > 0 ? <BiSolidUpArrow/> : <FaCaretDown/>}
                {elavation + "%"}
            </div>
        </div>
    )
}

export default DataCard;