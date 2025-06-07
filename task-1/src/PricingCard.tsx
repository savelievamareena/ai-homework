import React from 'react';

export interface PricingCardProps {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}

export default function PricingCard({plan, price, features, isFeatured = false}: PricingCardProps) {
    return (
        <div
            className={`px-3 py-12 shadow text-center transition transform ${
                isFeatured
                    ? 'bg-[#34495e] text-white md:scale-115 scale-none md:w-[250px] w-[320px]'
                    : 'bg-white text-gray-800 md:w-[300px] w-[320px]'
            }`}
        >
            <div>
                <h3 className={`text-lg font-semibold mb-2 ${isFeatured ? 'text-white' : 'text-gray-500'}`}>
                    {plan}
                </h3>
                <p className="text-4xl font-bold mb-4">${price}</p>
                <ul className="space-y-2 mb-6">
                    {features.map((feature, idx) => (
                        <li key={idx}
                            className={`py-2 text-sm font-medium ${
                                isFeatured
                                    ? 'border-b border-[#2c3e50] border-white'
                                    : 'border-b border-gray-300'
                            }`}>{feature}</li>
                    ))}
                </ul>
                <button
                    className={`px-4 py-2 rounded transition `}
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
}