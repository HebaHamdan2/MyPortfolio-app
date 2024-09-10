export default function Loading() {
   return <div className="flex bg-[#121212] items-center justify-center h-screen">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 border-4 border-t-4 border-white border-t-pink-300 rounded-full animate-spin"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
  }