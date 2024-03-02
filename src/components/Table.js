import React from "react";

const Table = ({ data, config, keyFn }) => {
    const renderedHeaders = config.map((col) => {
        return <th key={col.label}>{col.label}</th>;
    });

    const tableBody = data.map((rowData) => {
        const renderedCells = config.map((col) => {
            return (
                <td className="p-2" key={col.label}>
                    {col.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{tableBody}</tbody>
        </table>
    );
};

export default Table;
