import React from "react";



import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Typography } from "@material-ui/core";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

const Checkout = () => {
  const classes = useStyles();

  const selectCart = useSelector((state: IAppState) => state.product.cart);
  const selectSubTotal = useSelector((state: IAppState) => state.product.cartSubTotal);
  const selectTax = useSelector((state: IAppState) => state.product.cartTax);

  const TAX_RATE = 0.2;

  const ccyFormat = (num: number) => {
    return `${num.toFixed(2)}`;
  };

  const renderTotal = (sub, tax) => {
    let subNumb = Number(sub);
    let taxNumb = Number(tax);

    return parseFloat((subNumb + taxNumb) as any).toFixed(2);
  };

  return (
    <Container>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>

            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Qantity</TableCell>
              <TableCell align="center">Unit</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {selectCart.map((item) => (
              <TableRow key={item.id} className={classes.row}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="left">{item.count}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="right">{ccyFormat(item.total)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{selectSubTotal}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="center">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{selectTax}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="secondary">
                  {renderTotal(selectSubTotal, selectTax)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Checkout;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "200px 0px 100px 0px",
    },
    table: {
      minWidth: 700,
    },
    row: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
);
