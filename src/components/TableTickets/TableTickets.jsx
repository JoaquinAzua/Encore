import '../TableTickets/TableTickets.css'

export default function TableTickets({table}){

    return (
        <div className="table" >{table.row}{table.column}</div>   
    )
}