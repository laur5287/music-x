'use client'
import React from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Pagination,
} from "@nextui-org/react";
import { formatTime } from '@/lib/utils';
import { Download, Plus } from 'lucide-react';
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
// import {capitalize} from "./utils";

const statusColorMap = {
	active: "success",
	paused: "danger",
	vacation: "warning",
};

const statusOptions = [
	{ name: "Active", uid: "active" },
	{ name: "Paused", uid: "paused" },
	{ name: "Vacation", uid: "vacation" },
];

// const INITIAL_VISIBLE_COLUMNS = ["title", "album ", "time", "actions"];

const columns = [
	{ name: "TITLE", uid: "TITLE", sortable: true },
	{ name: "ALBUM	", uid: "ALBUM", sortable: false },
	{ name: "TIME", uid: "TIME", sortable: false },
	{ name: "ACTIONS", uid: "ACTIONS", sortable: false },
]

export default function ArtistTable({ tracks }: any) {
	const [filterValue, setFilterValue] = React.useState("");
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(['all']));
	// const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
	const [statusFilter, setStatusFilter] = React.useState("all");
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortDescriptor, setSortDescriptor] = React.useState({
		column: "age",
		direction: "ascending",
	});
	const [page, setPage] = React.useState(1);

	const pages = Math.ceil(tracks.length / rowsPerPage);

	const hasSearchFilter = Boolean(filterValue);

	const renderCell = React.useCallback((track: any, columnKey: any) => {
		const cellValue = track[columnKey];

		switch (columnKey) {
			case "TITLE":
				return (
					<h1 className="text-bold">{track.name}</h1>
				);
			case "ALBUM":
				return (
					<div className="flex flex-col">
						{/* <p className="capitalize text-bold text-small">{cellValue}</p> */}
						<p className="capitalize text-bold text-tiny text-default-500">{track.name}</p>
					</div>
				);
			case "TIME":
				return (
					<span className="">{formatTime(track.duration_ms)}</span>
				);
			case "ACTIONS":
				return (
					<div className="relative flex items-center justify-center gap-2">
						<Button isIconOnly radius="full" size="lg" variant="light" color="secondary">
							<Download className="border-current text-current/80" />
						</Button>

					</div>
				);
			default:
				return cellValue;
		}
	}, []);

	const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setRowsPerPage(Number(e.target.value));
		setPage(1);
	}, []);


	const onSearchChange = React.useCallback((value?: string) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue("");
		}
	}, []);

	const topContent = React.useMemo(() => {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex items-end justify-between gap-3">
					<Input
						isClearable
						classNames={{
							base: "w-full sm:max-w-[44%]",
							inputWrapper: "border-1",
						}}
						placeholder="Search by name..."
						size="sm"
						startContent={<Search className="text-default-300" />}
						value={filterValue}
						variant="bordered"
						onClear={() => setFilterValue("")}
						onValueChange={onSearchChange}
					/>
				</div>
			</div>
		);
	}, [
		filterValue,
		onSearchChange,
		onRowsPerPageChange,
	]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className="flex items-center justify-between px-2 py-2">
				<Pagination
					showControls
					classNames={{
						cursor: "bg-foreground text-background",
					}}
					color="default"
					isDisabled={hasSearchFilter}
					page={page}
					total={pages}
					variant="light"
					onChange={setPage}
				/>
			</div>
		);
	}, [page, pages]);

	const classNames = React.useMemo(
		() => ({
			wrapper: ["max-h-[382px]", "max-w-3xl"],
			th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
			td: [
				// changing the rows border radius
				// first
				"group-data-[first=true]:first:before:rounded-none",
				"group-data-[first=true]:last:before:rounded-none",
				// middle
				"group-data-[middle=true]:before:rounded-none",
				// last
				"group-data-[last=true]:first:before:rounded-none",
				"group-data-[last=true]:last:before:rounded-none",
			],
		}),
		[],
	);

	return (
		<Table
			id="artist-table"
			// hideHeader
			// isStriped
			isCompact
			removeWrapper
			aria-label="Artist top tracks tabel"
			bottomContent={bottomContent}
			bottomContentPlacement="inside"
			checkboxesProps={{
				classNames: {
					wrapper: "after:bg-foreground after:text-background text-background",
				},
			}}
			classNames={classNames}
			// selectedKeys={selectedKeys}
			// selectionMode="multiple"
			// sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="inside"
		// onSelectionChange={setSelectedKeys}
		// onSortChange={setSortDescriptor}
		>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
						allowsSorting={column.sortable}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={"No tracks found"} items={tracks.tracks}>
				{(item: any) => (
					<TableRow key={item.id}>
						{(row) => <TableCell>{renderCell(item, row)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}