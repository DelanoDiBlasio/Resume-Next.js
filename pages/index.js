import Navbar from "/comps/Navbar.js";

//this is my home page and i also used JSX to help me style the image as shown below//
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="heading1">Welcome to my Home Page!</h1>
      <img className="image1" src="/static/picturecover.jpg" alt="Picture" />
      <h3 className="heading3">
        My Digital CV -
        <a href="https://delanodiblasio.github.io/Delano_Di_Blasio_Resume/">
          Click Here
        </a>
      </h3>
      <style jsx>{`
        .image1 {
          width: 300px;
          height: 400px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .heading3 {
          font-size: 20px;
          text-align: center;
          margin: auto;
          padding: 35px;
        }
      `}</style>
    </div>
  );
}
