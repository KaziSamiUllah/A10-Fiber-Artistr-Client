const Error = () => {
    return (
        <div>
           <div className="min-h-screen bg-gray-100 flex items-center justify-center text-center">
      <div className="max-w-xl w-full bg-white p-8 shadow-md rounded-md">
        <h1 className="text-6xl mb-4 text-red-600">OPPS!</h1>
        <p className=" text-black mb-4 text-2xl">Something went wrong.</p>
        <p className="mb-4 text-5xl">404 : Page Not Found</p>
      </div>
    </div>
        </div>
    );
};

export default Error;



