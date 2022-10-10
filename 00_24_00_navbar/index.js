function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function MainContent() {
  return (
    <h1>I'm learning React!</h1>
  )
}

const page = (
  <div>
    <Navbar />
    <MainContent />
  </div>
)

ReactDOM.render(
  page
  , document.getElementById("root")
)

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(
  element
  , document.getElementById("thisjsx")
)

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>pricing</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar
  , document.getElementById("navbar")
)

function Footer() {
  return (
    <footer>
      <small>ⓒ 2021 sigma development. All rights reserved</small>
    </footer>
  )
}

function Header() {
  return(
    <header>
      <nav className="nav">
        {/* <h1>Reasons I'm excited to learn React</h1> */}
        <img src="./react_logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function ReactImage() {
  return (
    <div>
      <Header />
      <img src="./react_logo.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k starts on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <ReactImage />
  // ReactImage() //MOOG: this also works.. Only works if the funciton is pascal case (not camel case)
  , document.getElementById("reactReactImage")
)

const page2 = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
)

ReactDOM.render(
  page2
  , document.getElementById("stringify").append(JSON.stringify(page2))
)
