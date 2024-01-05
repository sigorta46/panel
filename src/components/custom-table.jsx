import { useMediaQuery } from '@react-hook/media-query';
import React, { useState } from 'react'
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa"; 
import CustomMobileTable from './custom-mobile-table';


function CustomTable({head, body, searchable}) {
    const [sorting, setSorting] = useState(false)
	const [search, setSearch] = useState('')
	
	const size = useMediaQuery('(max-width: 1150px)');

	const filteredData = body && body.filter(
		items => items.some(
		 	item => (item?.key || item?.props?.searchableText || item).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR'))
		 )
	).sort((a, b) => {
		if (sorting?.orderBy === 'asc') {
			return (a[sorting.key]?.key || a[sorting.key]?.props?.searchableText || a[sorting.key]).toString().localeCompare(b[sorting.key]?.key || b[sorting.key]?.props?.searchableText || b[sorting.key])
		}
		if (sorting?.orderBy === 'desc') {
			return b[sorting.key].toString().localeCompare(a[sorting.key])
		}
		return 0;
	})

	if (!body || body?.length === 0) {
		return (
			<div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">Gösterilecek veri bulunmuyor.</div>
		)
	}

	return (
		<>
			{searchable && (
				<div className="mb-4 flex gap-x-2 px-3">
					<input
						value={search}
						onChange={e => setSearch(e.target.value)}
						type="text"
						placeholder="Tabloda ara"
						className="h-10 outline-none focus:border-black border rounded text-sm px-4 w-full border-gray-300"
					/>
					{sorting && (
						<button
							onClick={() => setSorting(false)}
							className="h-10 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4">
							Sıralamayı İptal Et
						</button>
					)}
				</div>
			)}  
			{ size ? <CustomMobileTable head={head} body= {filteredData} /> :
			<div className="w-full border px-3 rounded">
					<table className="w-full">
						<thead className=''>
						<tr>
							{head.map((h, key) => (
								<th
									width={h?.width}
									className="text-left bg-gray-600 text-sm font-semibold text-gray-50 p-3 border-b"
									key={key}>
									<div className="inline-flex items-center gap-x-2">
										{h.name}
										{h.sortable && (
											<button onClick={() => {
												if (sorting?.key === key) {
													setSorting({
														key,
														orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
													})
												} else {
													setSorting({
														key,
														orderBy: 'asc'
													})
												}
											}}>
												{sorting?.key === key && (
													sorting.orderBy === 'asc' ? <FaSortDown size={14}/> : <FaSortUp size={14}/>
												)}
												{sorting?.key !== key && <FaSort size={14}/>}
											</button>
										)}
									</div>
								</th>
							))}
						</tr>
						</thead>
						<tbody>
						{filteredData.map((items, key) => (
							<tr className="group" key={key}>
								{items.map((item, key) => (
									<td
										className="p-3 text-sm text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600"
										key={key}>
										{Array.isArray(item) ? (
											<div className="flex gap-x-2.5">
												{ item  }
											</div>
										) :  item}
									</td>
								))}
							</tr>
						))}
						</tbody>
					</table>
				</div> 
				}
				
		</>
    );
}

export default CustomTable