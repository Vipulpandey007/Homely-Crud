import Button from "react-bootstrap/Button";
const Fakeui = () => {
  return (
    <div className="content-wrapper">
      <div className="Fakeui">
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
              <Button variant="primary ">Create</Button>
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
                        <tr>
                          <th>Country Code</th>
                          <th>Country Name</th>
                          <th>Update</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Loading..</td>
                          <td>Loading..</td>
                          <td>Loading..</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Fakeui;
