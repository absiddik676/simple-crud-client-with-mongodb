import './App.css'

function App() {

  const handelAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.password.value;
    console.log(name,email);
  }

  return (
    <>

      <h1>Simple CRUD </h1>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-16 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handelAddUser}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input type="text" id="email" name="name" className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">Password</label>
              <input type="text" id="password" name="password" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Login</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
