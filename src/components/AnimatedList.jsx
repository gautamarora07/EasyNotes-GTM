import React from "react";
import "./style/AnimatedList.css"; // Import your stylesheet

/*const AnimatedList = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3"    // Add more items as needed
  ]);

//   useEffect(() => {
//     // Simulate new items every 3 seconds
//     const intervalId = setInterval(() => {
//       setItems((prevItems) => [    ...prevItems,   `New Item ${prevItems.length + 1}`      ]
//       );
//     }, 10000);

//     return () => clearInterval(intervalId);
//   }, []);

  return (
    <div className="animated-list-container">
      <ul className="animated-list">
        {items.map((item, index) => (
          <li key={index} className="animated-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};*/
 
const AnimatedList = ({quotesJSON}) => {
  
  return (

<div className="quotes"> 
  <div className="quote-slide">  
   

    {
    quotesJSON?.map((Q, index)=>{   
      return   <div key={index} className="quote-div"> 
                        <span className="q-text">{Q.text}</span> <br />   
                        <span className="q-auth">{Q.author}</span> 
                </div>
    })
    }
    
    </div>
</div>

  )

  }
export default AnimatedList;
