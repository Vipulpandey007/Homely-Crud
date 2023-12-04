import React from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Fakeui from "./FakeUi";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function Country() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    fetchpost();
  }, [path]);
  const fetchpost = async () => {
    const { data } = await axios.get(
      "https://api.homelyhostel.com/api/country"
    );

    setPost(data);
  };
  const handleDelete = async (posts) => {
    try {
      const del = await axios.delete(
        "https://api.homelyhostel.com/api/country/" + posts.country_code
      );
      toast.error(del.data.message);
      fetchpost();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return post.length === 0 ? (
    <Fakeui />
  ) : (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>DataTables</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#/">Home</a>
                </li>
                <li className="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="d-flex justify-content-between pb-4">
            <Button onClick={() => navigate("/country/new")} variant="primary ">
              Create
            </Button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr className="heading" key={post.id}>
                        <th>Country Code</th>
                        <th>Country Name</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      {post.map((posts) => (
                        <tr key={posts.id}>
                          <td>{posts?.country_code}</td>
                          <td>{posts?.country_name}</td>
                          <td className="update">
                            <CiEdit
                              className="button-click mr-4"
                              onClick={() =>
                                navigate(`/country/${posts.country_code}`)
                              }
                            />
                            <MdDelete
                              className="button-click"
                              onClick={() => handleDelete(posts)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Country;
