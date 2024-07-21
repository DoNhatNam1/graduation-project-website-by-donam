'use client'

import { Button } from '@nextui-org/button';
import React, { useState } from 'react';

const LoadTestPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadTest = async () => {
    setLoading(true);
    try {
      // Gửi yêu cầu load test tới endpoint /api/load-test
      const response = await fetch("/api/load-test", {
        headers: {
            Accept: "application/json",
            method: "GET"
        }
      })
      if(response) {
        const data = await response.json();
        console.log(data)
      }
    } catch (error) {
      console.error('Load test failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-screen h-screen grid place-content-center align-middle gap-5'>
      <h1>Load Testing, dangerous button!!</h1>
      <Button onClick={handleLoadTest} disabled={loading} color='danger'>
        {loading ? 'Loading...' : 'Start Load Test'}
      </Button>
    </div>
  );
};

export default LoadTestPage;