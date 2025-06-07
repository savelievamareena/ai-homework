import React from 'react';
import PricingCard from './PricingCard';

type Plan = {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
};

export default function App() {
    const plans: Plan[] = [
        {
            plan: 'Standard',
            price: '100',
            features: ['50,000 Requests', '4 contributors', 'Up to 3 GB storage space'],
        },
        {
            plan: 'Pro',
            price: '200',
            features: ['100,000 Requests', '7 contributors', 'Up to 6 GB storage space'],
            isFeatured: true,
        },
        {
            plan: 'Expert',
            price: '500',
            features: ['200,000 Requests', '11 contributors', 'Up to 10 GB storage space'],
        },
    ];

    return (
        <div className="bg-gray-900 text-white py-14 px-4 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 my-20">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
}