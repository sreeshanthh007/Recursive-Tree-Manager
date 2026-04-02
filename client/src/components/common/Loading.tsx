

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="text-gray-500 animate-pulse font-medium">Loading nodes...</p>
    </div>
  );
};

export default Loading;
