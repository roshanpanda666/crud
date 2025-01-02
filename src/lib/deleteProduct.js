"use client";

export default function DeleteProduct(props) {
  

  const deleteRecord = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${props.id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        alert("Product deleted successfully");
        // Navigate to the product list page
      
      } else {
        alert("Failed to delete the product");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <button onClick={deleteRecord}>Delete</button>
    </div>
  );
}
