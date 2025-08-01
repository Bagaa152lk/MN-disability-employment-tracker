import React, { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import ViewToggle from '../components/ViewToggle';
import StatsCard from '../components/StatsCard';
import ApiService from "../services/ApiService";

const regions = [
    { name: 'Улаанбаатар', districts: 3, performance: 50 },
    { name: 'Увс', districts: 20, performance: 56 },
];

const Dashboard = () => {
    const [view, setView] = useState('card');
    const [regionList, setRegionList] = useState([]);

    const getRegionList = async () => {
        // await ApiService("get", "")
        //     .then((res) => {
        //         console.log('res:', res)
        //         setRegionList(res);
        //     })
        //     .catch((err) => console.error(err))
    }

    useEffect(() => {
        getRegionList();
    }, [])

    // console.log('regionList', regionList);

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-6">
                    <DashboardHeader />
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            Аймаг/хотын жагсаалт
                        </h2>
                        <ViewToggle view={view} setView={setView} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {view === 'card' &&
                            regions.map((region, index) => (
                                <StatsCard
                                    key={index}
                                    region={region.name}
                                    districts={region.districts}
                                    performance={region.performance}
                                />
                            ))}
                        {view === 'table' && (
                            <div className="col-span-full">
                                <table className="min-w-full bg-card border">
                                    <thead>
                                        <tr className="bg-muted">
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Region</th>
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Districts</th>
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Performance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {regions.map((region, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="p-3 text-sm text-foreground">{region.name}</td>
                                                <td className="p-3 text-sm text-foreground">{region.districts} сум/дүүрэг</td>
                                                <td className="p-3 text-sm text-foreground">{region.performance}%</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;