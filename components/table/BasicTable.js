import { useTable } from 'react-table'
import React, { useMemo } from 'react'

// tried to make this table reusable but it was a bad idea
//you can`t because you need to apply the styles.
//instead copy the code from here and use it as a quick way to start a table component



export const BasicTable = (props) => {

    const columns = useMemo(() => props.columns, [])
    const data = useMemo(() => props.data, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead  >
                {headerGroups.map(headerGroup => {
                    return (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    )
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
