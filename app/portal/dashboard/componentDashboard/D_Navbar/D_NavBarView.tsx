const D_NavBarView = () => {
  return (
    <>
      <nav className="navbar bg-dark" style={{backgroundColor:'red'}}>
        <div
          className="container-fluid"
          style={{
            justifyContent: "start",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <a className="navbar-brand" href="#">
            by
            <img
              src="https://onlinepngtools.com/images/examples-onlinepngtools/google-logo-transparent.png"
              alt="Logo"
              width={95}
              height={48}
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>

    </>
  );
};

export default D_NavBarView;
