import './Resume.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Resume extends React.Component {
  DownloadClick = (version) => {
    let file = "stuff"
    if (version === "pdf") {
      file = process.env.PUBLIC_URL + "/Romit's_Resume.pdf";
    }
    else {
      file = process.env.PUBLIC_URL + "/Romit's_Resume.docx";
    }
    fetch(file).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href =fileURL
        alink.download = file;
        alink.click();
      })
    })
  }
    componentDidMount() {
        document.title = `Resume Section`;
      }
    render() {
        return(<div className="Resume">
          <Header />
          <h1 className=' mt-10 text-5xl'>Resume</h1>
          <h3 className=' mt-10 text-3xl text-white'>You can download my resume here...</h3>
          <div className='top_portion'>
            <button className='class' id="word" onClick={ () => this.DownloadClick("word")}> Word version </button>
          </div>
          <div className='top_portion'>
          <button className='class' id='pdf' onClick={ () => this.DownloadClick("pdf")}> PDF version</button>
          </div>
          <h3 className='text-3xl text-white'>Or look at it here!</h3>
          <div className='bottom_portion'>
            <div className="h-1/5  bg-gray-200 text-left">
              <button className=' text-5xl mx-10 text-left' > acme</button>
              <button className=' text-5xl mx-10 text-left'> acme</button>
              <button className=' text-5xl mx-10 text-left'> acme</button>
              <button className=' text-5xl mx-10 text-left'> acme</button>
              <button className=' text-5xl mx-10 text-left'> acme</button>
              <button className=' text-5xl mx-10 text-left'> acme</button>
            </div>
            <div className=" h-fit bg-slate-950 text-left">
              <p> acme</p>
              <p> acme</p>
              <p> acme</p>
              <p> acme</p>
              <p> acme</p>
              <p> acme</p>
              <p> acme</p>
            </div>
          </div>
          <Footer />
        </div>
        );
}
}

export default Resume; 