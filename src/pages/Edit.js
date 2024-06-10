import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { SingelDataApi, UpdateBookApi } from "../services/allApis";

function Edit() {
  const navigate = useNavigate();
  var { id } = useParams();

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    coverImg: "",
    category: "",
  });

  const setDetails = (e) => {
    let { name, value } = e.target;
    // console.log(e.target.value);
    // console.log(e.target.name);
    setBookDetails({ ...bookDetails, [name]: value });
  };

const updateBook=async(e)=>{
    e.preventDefault()
  const out = await UpdateBookApi(id,bookDetails)
  if(out.status>=200 && out.status<300){
    setBookDetails(out.data)
    alert('Book Details Updated Successfully')
    navigate('/')
  }
  else{
    alert('updation failed')
  }
}

  useEffect(() => {
    const fetchDetails = async (id) => {
      const out = await SingelDataApi(id);
      setBookDetails(out.data);
    };
    fetchDetails(id);
  }, [id]);

  return (
    <div>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 fw-bold" style={{ color: "#c4a475" }}>
                Edit Book
              </p>
              <p className="">
                Transform your book with our easy-to-use editing tools.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-1 align-items-center">
              <img src={bookDetails.coverImg ||' https://i.postimg.cc/vmLFsjMr/f5a3d8e16677642b38608ca7b50de547.gif'}
               alt="" className='contact-img' />
            </div>
            <div className="col-md-4 mt-5">
              <form action="">
                <div className="mb-2">
                  <input
                    onChange={(e) => setDetails(e)}
                    name="title"
                    value={bookDetails.title}
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <input
                    value={bookDetails.author}
                    onChange={(e) => setDetails(e)}
                    name="author"
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Author"
                  />
                </div>
                <div className="mb-2">
                  <input
                    value={bookDetails.coverImg}
                    onChange={(e) => setDetails(e)}
                    name="coverImg"
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Cover Img Url"
                  />
                </div>
                <div className="mb-2">
                <Form.Select
                    onChange={(e) => setDetails(e)}
                    name="category"
                    value={bookDetails.category}
                    aria-label="Default select example"
                  >
                    <option value=''>Select Category</option>
                    <option value="Comic">Comic</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Other">Other</option>
                  </Form.Select>                </div>
                <div className="mb-2 mt-4">
                  <input
                  onClick={updateBook}
                    style={{ backgroundColor: "#c4a475" }}
                    type="submit"
                    className="btn btn__effect"
                    value="Update"
                  />
                  <Link to={"/"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Edit;
