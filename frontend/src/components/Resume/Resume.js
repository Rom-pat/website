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
          <div className='mb-7'>
          <Header />
          <h1 className=' mt-5 title'> My Resume Page</h1>
          <h3 className=' mt-10 text-3xl text-white'> Where You can download my resume here...</h3>
          <div className='top_portion'>
            <button className='class' id="word" onClick={ () => this.DownloadClick("word")}> Word version </button>
          </div>
          <div className='top_portion'>
          <button className='class' id='pdf' onClick={ () => this.DownloadClick("pdf")}> PDF version</button>
          </div>
          <div className='middle_portion'>
          <h2 className=' text-3xl text-white mb-6 inline-block'>Or Print it here</h2>
          <button className='class' id='view'> <a href="/Romit's_Resume.pdf" target='_blank' rel='noreferrer'> View PDF</a> </button>
          </div>
          </div>
          <Footer />
        </div>
        );
}
}

export default Resume; 