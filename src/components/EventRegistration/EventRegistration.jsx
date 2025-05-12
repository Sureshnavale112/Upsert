
export default function EventRegistration() {
    return (
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center bg-[url('public/assets/dashboard/Profilebg.png')]">
         
        <div className="text-white p-10 max-w-md">
          <h2 className="text-2xl font-bold mb-4">Join the Journey of Knowledge and Networking</h2>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <img src="public/assets/dashboard/log.png" alt="Upcert" className="h-20 justify-center mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-6 text-center text-blue-700">Secure Your Spot for Our Events</h3>
          <form className="space-y-4">
            <input className="input w-full p-2" type="text" placeholder="Name" required /><br></br>
            <input className="input w-full p-2" type="email" placeholder="Email" required /><br></br>
            <input className="input w-full p-2" type="tel" placeholder="Mobile Number" required /><br></br>
            <select className="input w-full p-2" required>
              <option value="">Select Event</option>
              <option>Cloud Computing</option>
              <option>IOT</option>
            </select>
            <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded">REGISTER</button>
          </form>
        </div>
      </div>
    );
  }
  