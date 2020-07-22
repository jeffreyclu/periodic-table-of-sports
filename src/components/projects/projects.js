import React from 'react';
import './projects.styles.css';

const Projects = ({ clicked, setClick }) => {
  let searchTerm = "https://source.unsplash.com/featured/?";
  clicked.keyword.forEach((word) => {
    searchTerm += `${word},`;
  })
  // useEffect(() => {
  //   let url = "https://en.wikipedia.org/w/api.php"; 
  //   let params = {
  //       action: "query",
  //       list: "search",
  //       srsearch: clicked.keyword.join(" "),
  //       format: "json"
  //   };

  //   url = url + "?origin=*";
  //   Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  //   const promise1 = fetch(url)
  //       .then((resp) => resp.json())
  //       .then((data) => data.query.search[0])
  //       .catch(function(error){console.log(error);});
  //   promises.push(promise1);

  //   const promise2 = fetch(url)
  //       .then((resp) => resp.json())
  //       .then((data) => data.query.search[0])
  //       .catch(function(error){console.log(error);});
  //   promises.push(promise1);
  //   Promise.all(promises)
  //       .then((data) => console.log(data))
  // })
  searchTerm = searchTerm.substring(0, searchTerm.length - 1)
  return(<div className="projects">
    <span className="x" onClick={() => setClick({ clicked: false, keyword: [] })}>X</span>
    <h2>{`${clicked.keyword.join(" ")}`}</h2>
    <img src={searchTerm} alt={`${clicked.keyword.join(" ")}`} />
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </div>)
}

export default Projects;
