import './Row.css';


const ExpanderRow = props => {

    const { name, children, onClickHandler, isExpanded } = props;

    return (
        <>
            <div className="rowHeader">
                {
                    isExpanded ? <img className="arrow" src="/svg/up-arrow.svg" alt="up arrow" onClick={onClickHandler} /> :
                    <img className="arrow" src="/svg/down-arrow.svg" alt="down arrow" onClick={onClickHandler} />
                }
                <h1 className="rowName">{name}</h1>
            </div>

            {isExpanded ? children : null}
        </>
    )
}

export default ExpanderRow;