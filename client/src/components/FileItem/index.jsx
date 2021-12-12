import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import FileIcon from "../FileIcon";

function FileItem(props) {

    return (
        <TableRow
            key={props._id}
            sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                cursor: 'pointer'
             }}
             hover={true}
             
            >
            <TableCell>
                <FileIcon type={props.type}/>
            </TableCell>
            <TableCell  align="left">{props.name}</TableCell>
            <TableCell align="right">{ new Date(props.date).toLocaleString() }</TableCell>
            <TableCell align="right">{props.size}</TableCell>
        </TableRow>
    )
}

export default FileItem;