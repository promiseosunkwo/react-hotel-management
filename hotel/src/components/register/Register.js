import "./register.css";

const Register = () => {
    return <>

{/* <!-- ================ Register page ================ --> */}
<div className="login-register-page pt-70 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3"> 
        {/* <!-- register box --> */}
        <div className="login-box">
          <form className="form-style-1 shadow p-30">
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <div className="form-group mb-4">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group mb-4">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group mb-4">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group mb-4">
              <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn-style-1 w-100">Create an Account</button>
          </form>
        </div>
        {/* <!-- register box end -->  */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Register page end ================ -->  */}

    </>;
}

export default Register;