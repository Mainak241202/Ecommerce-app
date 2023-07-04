import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, styled, Grid } from "@mui/material";
import ActionItem from "./ActionItem";

const Component = styled(Box)({
  background: "#f2f2f2",
  marginTop: "55px",
});

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Grid container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
          </Grid>
        </Grid>
      )}
    </Component>
  );
};

export default DetailView;
