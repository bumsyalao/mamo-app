

export default function paginate(data: any[], pageSize: number, page: number): { data: any[], currentPage: number, totalPages: number} {
    const txs = data.slice((page - 1) * pageSize, page * pageSize)
    let totalPages = data.length % pageSize > 0 ? ~~(data.length / pageSize) + 1 : data.length / pageSize ;
    return { data: txs, currentPage: page, totalPages }
}