import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteAccount } from "@/api/auth";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useAppSelector(state => state.auth);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (!isAuthenticated) {
      setError("You must be logged in to delete your account.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await dispatch(deleteAccount()).unwrap();

      alert(res.message || "Account deleted successfully");

      navigate("/"); // or "/sign-in"
    } catch (err: any) {
      if (err?.message?.includes("session")) {
        setError("You are in an active session. Leave it first.");
      } else if (err?.message?.includes("tournament")) {
        setError("You are in an active tournament. Leave it first.");
      } else {
        setError(err?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF6]">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-[500px] w-full text-center">
        
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Delete Account
        </h1>

        <p className="text-gray-600 mb-6">
          This action is permanent. All your data will be lost and cannot be recovered.
        </p>

        {/* 🔥 AUTH ERROR */}
        {!isAuthenticated && (
          <p className="text-red-500 text-sm mb-4">
            You are not authorized. Please log in first.
          </p>
        )}

        {/* 🔥 API ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={loading || !isAuthenticated}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Yes, Delete My Account"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default DeleteAccount;