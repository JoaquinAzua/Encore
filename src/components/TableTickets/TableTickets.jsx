import '../TableTickets/TableTickets.css'

export default function TableTickets({table, setSelectedTable}){

    return (
        <>
        <div className="table" onClick={() => setSelectedTable(table._id)} >{table.row}{table.column}</div> 
        </>

    )
}