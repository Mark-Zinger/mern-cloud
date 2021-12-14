import { useSelector } from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FileItem from "../FileItem";


export default function FileList() {

    const files = useSelector(state => state.files.files)

    console.log(files)

    return (
      <TableContainer component={Paper} sx={{margin: "20px 0"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{width: '4%'}}>File</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {  files.length 
                ? files.map((props) => ( <FileItem key={props._id} {...props}/>))
                : <Typography align="center" variant="h6">
                    Пустая папка
                  </Typography>
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
