import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Redux
import { useDispatch } from "react-redux";
import { addToCart, setSingleProduct } from "../../Redux/product/productAction";

// Material-Ui
import { IconButton } from "@material-ui/core";
import { Skeleton, Rating} from '@material-ui/lab';
import { withStyles } from "@material-ui/core/styles";

// Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core";

interface IProduct {
  product: {
    id: string;
    title: string;
    price: number;
    description: string;
    image: any;
    featured?: boolean;
    company?: string;
  };
}

const Product: React.FC<IProduct> = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      {product ?
      <CardActionArea className={classes.area}>
        <Link href={`/products/${product.id}`}>
          <Image
            width={300}
            height={250}
            className={classes.media}
            onClick={() => dispatch(setSingleProduct(product.id))}
            src={`/${product.image}`}
            title={product.title}
            />
        </Link>
      </CardActionArea>
      : <Skeleton variant="rect" animation="wave" width={320} height={273} />
      }

      <CardContent className={classes.content}>
      {product ?
        <Typography gutterBottom variant="body1" color="secondary">
          {product.price}.-
        </Typography>
        : <Skeleton variant="rect" animation="wave" width={280} height={24} />
        }

      {product ?
        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>
        :  <Skeleton variant="rect" animation="wave" width={280} height={32} style={{marginTop:"5px"}} />
      }

      {product ?
        <Typography gutterBottom variant="body2">
          {product.description.split("", 114).concat("...")}
        </Typography>
        : <Skeleton variant="rect" animation="wave" width={280} height={60} style={{marginTop:"5px"}} />
      }
      </CardContent>

      <CardActions className={classes.actions}>
      {product ?
        <StyledRating value={2} readOnly size="small" name="customized-color" defaultValue={2} precision={0.5} />
        : <Skeleton variant="rect" animation="wave" width={90} height={18} />
      }

      {product ?
        <Button
          size="small"
          onClick={() => dispatch(addToCart(product.id))}
          title="Add to cart"
          color="secondary"
          variant="outlined"
          startIcon={<AddIcon fontSize={"small"} />}
        >
          Add to Cart
        </Button>
      : <Skeleton variant="rect" animation="wave" width={130} height={30} />
      }
      </CardActions>
    </Card>
  );
};

export default Product;

// =================================================================

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",

    width: "320px",
    height: "490px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  area: {
    display: "flex",
    padding: "20px",
  },
  content: {
    padding: "20px",
  },
  media: { },
  actions: {
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
});

// =================================================================

const StyledRating = withStyles({
  iconFilled: {
    // color: 'blue',
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);
