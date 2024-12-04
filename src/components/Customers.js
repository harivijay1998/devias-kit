import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Checkbox,
  Button,
  TextField,
  Divider,
  Typography,
  Box,
  InputAdornment,
 
} from "@mui/material";
import AppHeader from "./AppHeader";
import SearchIcon from '@mui/icons-material/Search'

const customers = [
  {
    id: 1,
    name: "Alcides Antonio",
    email: "alcides.antonio@devias.io",
    location: "Madrid, Comunidad de Madrid, Spain",
    phone: "908-691-3242",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 2,
    name: "Marcus Finn",
    email: "marcus.finn@devias.io",
    location: "Carson City, Nevada, USA",
    phone: "415-907-2647",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 3,
    name: "Jie Yan",
    email: "jie.yan.song@devias.io",
    location: "North Canton, Ohio, USA",
    phone: "770-635-2682",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 4,
    name: "Nasimiyu Danai",
    email: "nasimiyu.danai@devias.io",
    location: "Salt Lake City, Utah, USA",
    phone: "801-301-7894",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 5,
    name: "Iulia Albu",
    email: "iulia.albu@devias.io",
    location: "Murray, Utah, USA",
    phone: "313-812-8947",
    signedUp: "Mar 8, 2024",
  },
];

const Customers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <AppHeader/>
    <Divider sx={{ backgroundColor: "gray", marginBottom: 2 }} />
      <Typography variant='h3' color='black'>Customers</Typography>
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Search Customers"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start"><SearchIcon/></InputAdornment>
          )
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < filteredCustomers.length}
                  checked={filteredCustomers.length > 0 && selected.length === filteredCustomers.length}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(filteredCustomers.map((customer) => customer.id));
                    } else {
                      setSelected([]);
                    }
                  }}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Signed Up</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(customer.id)}
                      onChange={(event) => {
                        const newSelected = event.target.checked
                          ? [...selected, customer.id]
                          : selected.filter((id) => id !== customer.id);
                        setSelected(newSelected);
                      }}
                    />
                  </TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.location}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.signedUp}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredCustomers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
    </>
  );
};

export default Customers;
