import './App.css'

function App() {

  const handelAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.password.value;
    const user = {name,email}
    console.log(name,email);

    fetch('http://localhost:5000/user',{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        alert('User added successfully')
      }
      form.reset()
    
    })


  }

  return (
    <>

      <h1>Simple CRUD </h1>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-16 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6">Add User</h2>
          <form onSubmit={handelAddUser}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">name</label>
              <input type="text" id="email" name="name" className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">Email</label>
              <input type="text" id="password" name="password" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Add</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
