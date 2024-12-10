import React from 'react'

function AdminPage() {
    const [result, setResult] = useState([]);

    useEffect(() => {
      getReview();
    }, []);
  
    const getReview = async () => {
      let result = await fetch('http://localhost:5000/Admino');
      result = await result.json();
      setResult(result);
    };
  return (
<div>
      <h1>Service Providers Details</h1>
      <div>
        {result.length > 0 ? (
          result.map((items, index) => (
            <div key={index}>
              <h3>Name: {items.Fullname}</h3>
              <p><strong>Service Category:</strong>Name: {items.FullName}</p>
              <p><strong>Review 1:</strong> PhoneNumber: {items.PhoneNumber}</p>
              <p><strong>Review 2:</strong> Address: {items.Address}</p>
              <p><strong>Review 3:</strong> Category : {items.Servicecategory}</p>
              <p><strong>Description:</strong>Specialisation: {items.Specialisation}</p>
              <p><strong>Description:</strong>Experience: {items.Experience}</p>
              <p><strong>Description:</strong>Tools: {items.Tools}</p>
              <p><strong>Description:</strong>Availability: {items.Availability}</p>
            </div>
          ))
        ) : (
          <h2>No Reviews Found</h2>
        )}
      </div>
    </div>
  )
}

export default AdminPage
