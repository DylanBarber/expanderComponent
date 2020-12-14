import { Component } from "react";
import ExpanderRow from "./Row";
import "./Expander.css";

export default class ExpanderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expandedRowIds: []
        };
    }

    rowClickHandler(id) {
        const { expandedRowIds } = this.state;
        const rowIsExpanded = expandedRowIds.includes(id);

        if (rowIsExpanded) {
            // Remove this row from expandedRowIds in state
            const newExpandedRowIds = expandedRowIds.filter(rowId => rowId !== id);

            this.setState({ expandedRowIds: newExpandedRowIds });

            return;
        }

        // Add this row to expandedRowIds
        this.setState({ expandedRowIds: [...expandedRowIds, id] });
    }

    render() {
        const { expandedRowIds } = this.state;

        const rows = this.props.rows.map(row => {
            const isExpanded = expandedRowIds.includes(row.id);

            return (
                <ExpanderRow
                    key={row.id}
                    name={row.name}
                    isExpanded={isExpanded}
                    onClickHandler={() => this.rowClickHandler(row.id)}
                >
                    {row.content}
                </ExpanderRow>
            );
        });

        return (
            <div className="rowContainer">
                {rows}
            </div>
        );
    }
}