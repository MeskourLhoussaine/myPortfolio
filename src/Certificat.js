import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Certificate() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'DevOps, Cloud, and Agile Foundations',
            description1: "DevOps essential characteristics including culture, behavior, practices, tools, methodologies, technologies and metrics.",
            link:"https://www.coursera.org/account/accomplishments/specialization/certificate/QUT43AA5XXYT",
        },
        {
            id: 2,
            name: 'Front End Web Development with React',
            description1: "This course explores Javascript based front-end application development, and in particular the React library .",
            link:"https://www.coursera.org/account/accomplishments/certificate/D4XFKHGU4K42",
        },
        {
            id: 3,
            name: 'Introduction to Cloud Computing',
            description1: "Introduction to cloud computing: characteristics, business case, and emerging technologies.",
            link:"https://www.coursera.org/account/accomplishments/certificate/RNRVZ7Y3478W",
        },
        {
            id: 4,
            name: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
            description1: "Learn Bootstrap 4 for responsive design and CSS/JavaScript components.",
            link:"https://www.coursera.org/account/accomplishments/certificate/LPA9E9JCKMKX",
        },
        {
            id: 5,
            name: 'Server-side Development with NodeJS, Express and MongoDB',
            description1: "Two-line description: This course covers server-side web development using NodeJS and modules like Express.",
            link:"https://www.coursera.org/account/accomplishments/certificate/4F6LNBSBW92P",
        },
        {
            id: 6,
            name: 'Introduction to Agile Development and Scrum',
            description1: "Agile and Scrum principles for software development, including small batches, MVP and pair programming.",
            link:"https://www.coursera.org/account/accomplishments/certificate/PVHHBCZ26K6K",
        },
        {
            id: 7,
            name: 'Introduction to DevOps',
            description1: "Learn the essential characteristics of DevOps and its impact on the organization.",
            link:"https://www.coursera.org/account/accomplishments/certificate/AKQTXKPX4W45",
        }
    ]);

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
          <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div className="mb-3"></div>
            <div>
              <h1 className="mb-1">
              {product.name.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && index % 3 === 0 && <br />}
                    {word + " "}
                  </React.Fragment>
                ))}
              </h1>
              <h4 className="mt-0 mb-3">
                {product.description1.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && index % 4 === 0 && <br />}
                    {word + " "}
                  </React.Fragment>
                ))}
              </h4>
              <a href={product.link}>
                <h5 className="mt-0 mb-3">
                    Coursera Link</h5>
              </a>
            </div>
          </div>
        );
      };
      

    return (
        <div className="card">
            <Navbar />
            <Carousel
                value={products}
                numVisible={3}
                itemTemplate={productTemplate}
                responsiveOptions={responsiveOptions}
                style={{marginTop: '150px'}}
            />
            <Footer />
        </div>
    );
}
