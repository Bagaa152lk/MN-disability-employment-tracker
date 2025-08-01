import React, { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import ViewToggle from '../components/ViewToggle';
import StatsCard from '../components/StatsCard';
import ApiService from "../services/ApiService";
import ProgressBar from "../components/ProgressBar";
import { ChevronRight } from "lucide-react";

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
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Нэр</th>
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Гүйцэтгэл</th>
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Төлөв</th>
                                            <th className="p-3 text-left text-sm font-medium text-foreground">Дэлгэрэнгүй</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {regions.map((region, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="p-3 text-sm text-foreground">{region.name}</td>
                                                <td className="p-3 text-sm text-foreground">
                                                    <ProgressBar width="120px" value={region.performance} viewPercent={true} />
                                                </td>
                                                <td className="p-3 text-sm text-foreground">
                                                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-white bg-warning">
                                                        Дундаж
                                                    </div>
                                                </td>
                                                <td className="p-3 text-sm text-foreground">
                                                    <div className="w-full flex justify-center align-middle">
                                                        <button
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground rounded-md h-8 w-8 p-0 hover:bg-primary/10"
                                                        >
                                                            <ChevronRight className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </td>
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