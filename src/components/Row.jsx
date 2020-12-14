import './Row.css';
import upArrowLogo from '../svg/up-arrow.svg';
import downArrowLogo from '../svg/down-arrow.svg';


const ExpanderRow = props => {

    const { name, children, onClickHandler, isExpanded } = props;

    return (
        <>
            <div className="rowHeader">
                {
                    isExpanded ? <img className="arrow" src={upArrowLogo} alt="up arrow" onClick={onClickHandler} /> :
                    <img className="arrow" src={downArrowLogo} alt="down arrow" onClick={onClickHandler} />
                }
                <h1 className="rowName">{name}</h1>
            </div>

            {isExpanded ? children : null}
        </>
    )
}

export default ExpanderRow;