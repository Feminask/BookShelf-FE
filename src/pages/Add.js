import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { addBookApi } from "../services/allApis";

function Add() {
const navigate=useNavigate()
  const [bookInputs, setBookInputs] = useState({
    title: "",
    author: "",
    coverImg: "",
    category: "",
  });

  const setData = (e) => {
    let{name,value}=e.target
    // console.log(e.target.value);
    // console.log(e.target.name);
setBookInputs({...bookInputs,[name]:value})
  };


  const AddBook=async(e)=>{
    e.preventDefault()
    const {title,coverImg,author,category}=bookInputs
  if(title===""|| coverImg===""||  author==="" ||category===""){
    alert("please fill all datas")
  }else{const out = await addBookApi(bookInputs)

    if(out.status>=200 && out.status<300){
        setBookInputs(out.data)
        alert('new book added successfully')
        navigate('/')
    }else{
        alert('data adding failed')
    }
    }
  }
  return (
    <div>
      {/* <pre>{JSON.stringify(state.contact)}</pre> */}
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4  fw-bold" style={{ color: "#cd9730" }}>
                Add Book
              </p>

              <p className="">
                Add comprehensive details to enrich your book's profile!{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-1 align-items-center">
              <img
                src={bookInputs.coverImg ||' https://i.postimg.cc/vmLFsjMr/f5a3d8e16677642b38608ca7b50de547.gif'}
                alt=""
                className="contact-img"
              />
            </div>

            <div className="col-md-4 mt-5">
              <form action="">
                <div className="mb-2">
                  <input
                    onChange={(e) => setData(e)}
                    name="title"
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <input
                    onChange={(e) => setData(e)}
                    name="author"
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Author"
                  />
                </div>
                <div className="mb-2">
                  <input
                    onChange={(e) => setData(e)}
                    name="coverImg"
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Cover Img Url"
                  />
                </div>
                <div className="mb-2">
                  <Form.Select
                    onChange={(e) => setData(e)}
                    name="category"
                    aria-label="Default select example"
                  >
                    <option>select Category</option>
                    <option value="Comic">Comic</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </div>
                <div className="mb-2 mt-4">
                  <input
                  onClick={AddBook}
                    style={{ backgroundColor: "#cd9730" }}
                    type="submit"
                    className="btn btn__effect"
                    value="Add"
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

export default Add;
