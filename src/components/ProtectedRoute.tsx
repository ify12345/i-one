import { useAppSelector } from "@/redux/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAppSelector(state => state.auth);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF6]">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-[500px] w-full text-center">
          
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Unauthorized Access
          </h1>

          <p className="text-gray-600 mb-6">
            You must be logged in or have an existing account to access this page.
          </p>

          <button
            onClick={() => window.location.href = "/sign-in"}
            className="px-6 py-3 bg-[#F6973F] text-white rounded-lg font-semibold"
          >
            Go to Login
          </button>

        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;