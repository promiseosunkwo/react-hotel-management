import "./login.css";

const Login = () => {
    return <>

{/* <!-- ================ Login page ================ --> */}
<div className="login-register-page pt-70 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3"> 
        {/* <!-- login box --> */}
        <div className="login-box">
          <form className="form-style-1 shadow p-30">
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <div className="form-group mb-4">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label font-size-14" for="exampleCheck1">Remember Me</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="forgot-password text-right"> <a href="" className="text-danger">I forgot my password</a> </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn-style-1 w-100">Sign In</button>
            </div>
            <p className="mb-0">Don't have account? <a href="">Signup!</a></p>
          </form>
        </div>
        {/* <!-- login box end -->  */}
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ Login page end ================ -->   */}

    </>;
}


export default Login;