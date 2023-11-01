'use client'
import { useTable } from 'react-table'
import React, { useMemo } from 'react'
import Link from "next/link";


const COLUMNS = [
    {
        Header: 'Artist',
        accessor: (row) => {
            let href = `./search/${row.artists[0].id}`
            return (
                <Link href={href} rel="noopener noreferrer">
                    {row.artists[0].name}
                </Link>
            )
        }
    },
    {
        Header: 'Song',
        accessor: (row) => {
            let href = `./search/${row.id}`
            return (
                <Link href={href} rel="noopener noreferrer">
                    {row.name}
                </Link>
            )
        }
    },
    {
        Header: 'Album',
        accessor: (row) => {
            let href = `./search/${row.album.id}`
            return (
                <Link href={href} rel="noopener noreferrer">
                    {row.album.name}
                </Link>
            )
        }
    },
]

export const Table = (props) => {

    const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => props.data, [])



    const tableInstance = useTable({
        columns,
        data: props.data
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
                                        {/* <Link
                                            href={`./`}
                                            className='hover:underline'
                                        > */}
                                        {cell.render('Cell')}
                                        {/* </Link> */}
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

