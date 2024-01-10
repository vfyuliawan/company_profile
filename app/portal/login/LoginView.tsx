import { LoginViewModel } from "./LoginViewModel";


export const LoginView = () => {
    const {setEmail, setPassword, email, password, postLogin} = LoginViewModel()
    return (
        <div>
        <title>Login</title>
        <link rel="stylesheet" href="../../../assets/css/styleLogin.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
          rel="stylesheet"
        />
        <div>
          <label htmlFor="chk" aria-hidden="true">
            Kelola Kontent
          </label>
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
              <form>
                <label htmlFor="chk" aria-hidden="true">
                  Sign up
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(input) => {
                    setEmail(input.target.value);
                  }}
                />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                  onChange={(input) => {
                    setPassword(input.target.value);
                  }}
                />
                <button>Sign up</button>
              </form>
            </div>
            <div className="login">
              <form>
                <label htmlFor="chk" aria-hidden="true">
                  Login
                </label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(input) => {
                    setEmail(input.target.value);
                  }}
                />
                <input
                  type="password"
                  value={password}
                  name="pswd"
                  placeholder="Password"
                  required
                  onChange={(input) => {
                    setPassword(input.target.value);
                  }}
                />
                <button type="button"
                  onClick={() => {
                    postLogin({
                      email,
                      password,
                    });
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}