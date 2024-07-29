"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import getRoute from "../Actions/GET/getRoute";
import { RouteActionTypes } from "../types/testing";

const LoadTestPage = () => {
  const [loading, setLoading] = useState<{
    [key: string]: boolean;
  }>({
    btn1000: false,
    btn3000: false,
    btn10000: false,
  });
  
  const [results, setResults] = useState<{
    [key: string]: { success: number; failure: number } | null;
  }>({
    btn1000: null,
    btn3000: null,
    btn10000: null,
  });

  const handleLoadTest = async (action: RouteActionTypes) => {
    setLoading(prev => ({ ...prev, [action]: true }));
    setResults(prev => ({ ...prev, [action]: null }));
    
    try {
      // Gửi yêu cầu load test tới endpoint /api/load-test
      const response = await getRoute(action);
      console.log(`Number of requests: ${response.success} successful, ${response.failure} failed`);
      setResults(prev => ({ ...prev, [action]: response }));
    } catch (error) {
      console.error("Load test failed:", error);
    } finally {
      setLoading(prev => ({ ...prev, [action]: false }));
    }
  };

  return (
    <div className="w-screen h-screen grid place-content-center align-middle gap-5">
      <h1>Load Testing, dangerous buttons!!</h1>

      <div className="w-full flex gap-6">
        <Button
          onClick={() => handleLoadTest("btn1000")}
          disabled={loading.btn1000}
          color="danger">
          {loading.btn1000 ? "Loading..." : "Start 1000 Requests"}
        </Button>
        <Button
          onClick={() => handleLoadTest("btn3000")}
          disabled={loading.btn3000}
          color="danger">
          {loading.btn3000 ? "Loading..." : "Start 3000 Requests"}
        </Button>
        <Button
          onClick={() => handleLoadTest("btn10000")}
          disabled={loading.btn10000}
          color="danger">
          {loading.btn10000 ? "Loading..." : "Start 10000 Requests"}
        </Button>
      </div>

      <div className="w-full flex flex-col gap-4 mt-8">
        {Object.entries(results).map(([key, result]) => (
          result && (
            <div key={key}>
              <h3>{key === "btn1000" ? "1000 Requests" : key === "btn3000" ? "3000 Requests" : "10000 Requests"}</h3>
              <p>Successful: {result.success}</p>
              <p>Failed: {result.failure}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default LoadTestPage;
