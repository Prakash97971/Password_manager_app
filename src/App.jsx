import Background from './components/background'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [credential, setcredential] = useState({ site: "", username: "", password: "" })
  const [credentialarray, setcredentialarray] = useState([])
  const [show, setshow] = useState(false)
  const getpassword = async () => {
    const req = await fetch('http://localhost:3000/');
    const data = await req.json();
    setcredentialarray(data);
  }

  useEffect(() => {
    getpassword();
  }, []);

  const handlechange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  const handleadd = async () => {
    // Use an existing id if present (editing), or generate a new one
    const id = credential.id ? credential.id : uuidv4();
    const newCredential = { ...credential, id };

    // If editing (id exists), remove the old record first
    if (credential.id) {
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
    }

    // Update state with new credential
    setcredentialarray([...credentialarray, newCredential]);

    // Save the new credential in the database
    let res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCredential)
    });
  

    // Reset the credential form
    setcredential({ site: "", username: "", password: "" });
  };

  const handleedit = (e, id) => {
    setcredential({ ...credentialarray.filter(i => i.id === id)[0], id: id })
    setcredentialarray(credentialarray.filter(item => item.id !== id))

    // localStorage.setItem("credential", JSON.stringify(credentialarray))


  }
  const handledelete = async (e, id) => {
    // Remove credential from state
    const updatedCredentials = credentialarray.filter(item => item.id !== id);
    setcredentialarray(updatedCredentials);

    // Delete credential from the database
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });
  };

  return (
    <>
      <Background />
      <Navbar />

      <div className='container md:mt-5 mt-1 pt-5 flex flex-col h-[78vh] mx-auto md:w-[60vw] w-[95vw] '>
        <div className="flex items-center gap-0 justify-center ">
          <span className='text-2xl font-bold text-green-600'> &lt;</span>
          <span className="text-2xl font-bold text-black">Pass</span>
          <span className="text-2xl font-bold text-green-600">OP/&gt;</span>
        </div>
        <div className='self-center text-xl font-bold '>
          Your Password Manager App
        </div>
        <div className="flex flex-col gap-3 mt-5 w-[95%] md:w-[90%] justify-center items-center mx-auto text-white">
          {/* Site URL Input */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter website URL"
              name="site"
              value={credential.site}
              className="mt-3 w-full rounded-xl h-8 pl-2 bg-slate-600"
              onChange={handlechange}
            />
          </div>

          {/* Username and Password Block */}
          <div className="w-full flex flex-col md:flex-row gap-3">
            {/* Username Input */}
            <div className="w-full md:w-[60%]">
              <input
                value={credential.username}
                type="text"
                placeholder="Enter Username"
                name="username"
                className="w-full h-8 rounded-xl pl-2 bg-slate-600"
                onChange={handlechange}
              />
            </div>

            {/* Password Input and Icon */}
            <div className="w-full md:w-[40%] flex flex-col gap-1 md:flex-row items-center">
              <div className="w-full flex items-center gap-1">
                <input
                  name="password"
                  type={show ? "text" : "password"}  // toggle input type based on show
                  placeholder="Enter Password"
                  value={credential.password}
                  className="w-full h-8 rounded-xl pl-2 bg-slate-600"
                  onChange={handlechange}
                />

                <span className="flex items-center justify-center">
                  <lord-icon
                    style={{ cursor: "pointer" }}
                    onClick={() => setshow(!show)}
                    src="https://cdn.lordicon.com/dicvhxpz.json"
                    trigger="hover"
                    stroke="bold">
                  </lord-icon>
                </span>
              </div>

            </div>
          </div>
        </div>



        <div className="flex justify-center mt-5"> <button className='font-bold h-12 bg-green-500 text-white w-20 rounded-2xl hover:bg-green-700  hover: transition-all flex justify-center items-center border border-black' onClick={handleadd}>
          <span><lord-icon
            src="https://cdn.lordicon.com/jeuxydnh.json"
            trigger="hover"
            stroke="bold">
          </lord-icon></span>
          <span> Save</span></button></div>
        <div className='md:mt-8  mt-1 font-bold md:ml-12 ml-5 text-2xl'> Your Passwords</div>
        {credentialarray.length === 0 && <div className='text-sm mt-2 ml-12'> No Credentials to show</div>}
        {credentialarray.length > 0 && <div className="relative overflow-x-auto mx-auto w-[90%] mt-3 mb-4 text-black">
          <table className="w-full text-sm text-left rtl:text-right  dark:text-gray-400 text-black">
            <thead className="text-xs text-black uppercase bg-green-500 dark:text-gray-400 top-0 sticky">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Site
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Actions
                </th>
              </tr>
            </thead>
            {credentialarray.map((item, index) => {
              return <tbody key={index}>
                <tr className=" border-b text-black bg-green-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    {item.site}
                  </th>
                  <td className="px-6 py-4 text-black font-medium">
                    {item.username}
                  </td>
                  <td className="px-6 py-4 text-black font-medium">
                    {"*".repeat(item.password.length)}
                  </td>
                  <td className="px-6 py-4 flex text-sm gap-3 text-black">
                    <button onClick={(e) => { handleedit(e, item.id) }} className='border border-black  w-fit px-2 py-1 bg-green-500 rounded-lg hover:bg-green-700'> Edit</button>
                    <button onClick={(e) => { handledelete(e, item.id) }} className='border border-black rounded-lg w-fit px-2 py-1  bg-green-500 hover:bg-green-700' > Delete</button>
                  </td>
                </tr>
              </tbody>
            })}
          </table>

        </div>}
      </div>
      <Footer />
    </>
  )
}

export default App