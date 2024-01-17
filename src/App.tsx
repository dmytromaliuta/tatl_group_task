import { useEffect, useState } from "react";
import StudentsTable from "./components/StudentsTable";
import { useTypedDispatch } from "./store/hooks/useTypedDispatch";
import { useTypedSelector } from "./store/hooks/useTypedSelector";
import { fetchStudents } from "./store/action-creators/student";
import { fetchColumns } from "./store/action-creators/column";
import { fetchRates } from "./store/action-creators/rate";
import { Student, StudentFields } from "./types/student";
import { Snackbar } from "@mui/material";

function App() {

  const dispatch = useTypedDispatch();

  const { students, error: studentError } = useTypedSelector(state => state.student);
  const { columns, error: columnError } = useTypedSelector(state => state.column);
  const { rates, error: rateError } = useTypedSelector(state => state.rate);

  const [data, setFormattedStudents] = useState<StudentFields[]>([]);
  const [open, setOpen] = useState(false);
  const [error, serErrorMessage] = useState<string | null>();
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if(studentError || columnError || rateError) {
      setOpen(true)
      serErrorMessage(studentError || columnError || rateError)
    }
  }, [studentError, columnError, rateError])

  useEffect(() => {
    dispatch(fetchStudents())
    dispatch(fetchColumns())
    dispatch(fetchRates())
  }, [dispatch])

  useEffect(() => {
    if (students.length > 0 && rates.length > 0) {
      let data = students.map((item: Student, index: number) => {
        let student:StudentFields = {
          id: ++index,
          fullName: [item.LastName, item.FirstName, item.SecondName].filter(item => item).join(" "),
          studentId: item.Id
        }
        rates.forEach(rate => {
          if(rate.SchoolboyId === item.Id) {
            student["column_" + rate.ColumnId] = rate.Title
          }
        })
        return student
      })
      setFormattedStudents(data);
    }
  }, [students, rates]);

  return (
    <>
      <StudentsTable columns={columns} data={data} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
      />
    </>
  );
}

export default App;
