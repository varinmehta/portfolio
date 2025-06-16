'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
);

export default function LeetCodeRatingChart() {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/leetcode-rating')
            .then(res => res.json())
            .then(data => {
                const ratings = data.map((entry: any) => entry.rating);
                const times = data.map((entry: any) => entry.time);

                const pointRadius = ratings.map((rating: number, index: number) => {
                    if (index === 0) return 3; // Always show the first point
                    return rating === ratings[index - 1] ? 0 : 3; // Hide if same as previous
                });

                setChartData({
                    labels: times,
                    datasets: [
                        {
                            label: 'LeetCode Contest Rating',
                            data: ratings,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            tension: 0.3,
                            fill: true,
                            pointRadius: pointRadius,
                            pointHoverRadius: 5,
                        },
                    ],
                });
            });

    }, []);

    if (!chartData) return <p>Loading LeetCode graph...</p>;

    return (
        <Line
            data={chartData}
            options={{
                responsive: true,
                scales: {
                    x: {
                        type: 'time',
                        time: { unit: 'month' },
                        title: { display: true, text: 'Contest Date' },
                    },
                    y: {
                        title: { display: true, text: 'Rating' },
                        beginAtZero: false,
                    },
                },
            }}
        />
    );
}
