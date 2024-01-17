import { useReactTable, getCoreRowModel, createColumnHelper, flexRender } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import { StudentFields } from "../types/student";
import { Column } from "../types/column";
import { useTypedDispatch } from "../store/hooks/useTypedDispatch";
import { rateStudent, unRateStudent } from "../store/action-creators/rate";

interface Props {
  columns: Column[],
  data: StudentFields[]
}

function StudentsTable({columns, data}: Props) {

  const dispatch = useTypedDispatch();
  const columnHelper = createColumnHelper<StudentFields>()
  
  const defaultColumns = [
    columnHelper.accessor("id", {
      header: "№"
    }),
    columnHelper.accessor("fullName", {
      header: "ПІБ",
    }),
    ...columns.map(item => {
      return columnHelper.accessor(`column_${item.Id}`, {
        header: `${item.Title}`
      })
    })
  ]
  
  const table = useReactTable({
    columns: defaultColumns,
    data,
    getCoreRowModel: getCoreRowModel()
  })

  function handleCellClick (cell: any, row: any) {
    const studentId = row.original.studentId;
    const columnId = +cell.id.split("_")[2];

    switch (cell.getValue()?.charCodeAt()) {
      case 72:
        dispatch(unRateStudent(studentId,columnId));
        break;
      case 1053:
        dispatch(unRateStudent(studentId,columnId));
        break;
      case undefined:
        dispatch(rateStudent(studentId,columnId))
        break;
      default:
        return
    }
  }
  
  return (
    <TableContainer sx={{ overflowX: 'initial' }}>
      <Table stickyHeader>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <TableRow key={index}>
              {headerGroup.headers.map((header, index) => (
                <StyledTableCell size="small" key={index} >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                      )}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row, index) => (
            <StyledTableRow key={index}>
              {row.getVisibleCells().map((cell, index) => (
                <StyledTableCell size="small" key={index} onClick={() => handleCellClick(cell, row)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentsTable;

//Styling functions

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: "pointer"
    },
    '&:hover:first-of-type': {
      backgroundColor: 'initial',
      cursor: "auto"
    },
    '&:hover:nth-of-type(2)': {
      backgroundColor: 'initial',
      cursor: "auto"
    },
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));