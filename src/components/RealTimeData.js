import React, { useEffect, useState, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function RealTimeData({ seizureDemo }) {
  const [data, setData] = useState([]);
  const bpmRef = useRef(65);
  const spikeNextTickRef = useRef(false);
  const tickCountRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let heartRate;
      let muscleActivity;

      if (seizureDemo) {
        // Simulate seizure: more intense, erratic readings
        heartRate = Math.round(Math.random() * 10 + 130); // 130-140 bpm
        muscleActivity = Math.round(Math.random() * 25 + 110); // 110-135 Hz
      } else {
        // Normal readings
        let next = bpmRef.current + (Math.random() * 2 - 1);
        next = Math.round(Math.max(60, Math.min(75, next)));
        bpmRef.current = next;

        tickCountRef.current++;
        if (tickCountRef.current % 20 === 0) {
          spikeNextTickRef.current = true;
        }

        muscleActivity = spikeNextTickRef.current
          ? Math.round(Math.random() * 2 + 69)
          : Math.round(Math.random() * 2 + 49);

        spikeNextTickRef.current = false;

        heartRate = parseFloat(next.toFixed(2));
      }

      const newPoint = {
        time: Date.now(),
        heartRate,
        muscleActivity,
      };

      setData(prev => [...prev, newPoint].slice(-40));
    }, 200);

    return () => clearInterval(interval);
  }, [seizureDemo]);

  return (
    <div className="realtime-data">
      <h2 className="text-xl font-semibold mb-4">Real Time Data</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={[45, 120]} axisLine={false} tickLine={false} tick={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="linear"
            dataKey="muscleActivity"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RealTimeData;
