import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { Firebase } from "../../firebase/config";
import { AuthContext } from "../../contextStore/AuthContext";
import { useHistory } from "react-router";
import GoLoading from "../Loading/GoLoading";
const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [Hostel, setHostel] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();
  let [loading,setLoading]=useState(false);
  const handleSubmit = () => {
    setLoading(true);
    let date = new Date().toDateString();
    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection("products")
            .add({
              name,
              category,
              price,
              Hostel,
              description,
              url,
              userId: user.uid,
              createdAt: date,
            })
            .then(() => {
              history.push("/");
            });
        });
      });
  };
  return (
    <Fragment>
      <Header />
    { loading && <GoLoading/> }
      <div className="centerDiv">
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Category:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        > <option >Select Category</option>
          <option value="Medicines">Medicines</option>
          <option value="Shoes">Shoes</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Food">Food</option>
          <option value="Consumables">Consumables</option>
          <option value="Beauty">Beauty</option>

         </select>
        <br />
        <label>Hostel:</label>
        <select
          name="Hostel"
          onChange={(e) => {
            setHostel(e.target.value);
          }}
          className="input"
        > <option >Select Hostel</option>
          <option value="Block-1">Block-1</option>
          <option value="Block-2">Block-2</option>
          <option value="Block-3">Block-3</option>
          <option value="Girls">Girls</option>
          <option value="Block-4">Block-4</option>
        </select>
        <br/> 
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}>
          upload and Submit
        </button>
      </div> 
    </Fragment>
  );
};

export default Create;
