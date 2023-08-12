import { useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getProductsAction,
} from "../../pages/product/productAction";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between mb-3">
        <div>{products.length} Products found</div>
        <div>
          <Form.Control type="text" placeholder="search by product name ..." />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>no img</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>
                <Button variant="warning">Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteProductAction(item._id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
