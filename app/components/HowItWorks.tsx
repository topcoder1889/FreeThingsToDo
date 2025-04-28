'use client';

const steps = [
    {
        number: '1',
        title: 'Search Your City',
        description: 'Enter your location or a city you\'re planning to visit to find free activities.'
    },
    {
        number: '2',
        title: 'Browse Activities',
        description: 'Filter by category, rating, or season to find experiences that match your interests.'
    },
    {
        number: '3',
        title: 'Save & Share',
        description: 'Create itineraries, save favorites, and share activities with friends and family.'
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="section-heading text-center mb-16">
                    <h3 className="text-3xl font-semibold mb-4">How FreeThingsToDo Works</h3>
                    <p className="text-gray-600">Discover, explore, and enjoy free activities anywhere</p>
                </div>

                <div className="steps flex justify-around flex-wrap gap-12">
                    {steps.map((step) => (
                        <div key={step.number} className="step text-center max-w-[280px]">
                            <div className="step-icon w-[100px] h-[100px] rounded-full bg-white text-primary flex items-center justify-center
                            text-[2rem] mx-auto mb-8 shadow-[0_8px_30px)rgba(0,0,0,0.08)] border border-[#f0f0f0] fon-semibold">
                                {step.number}
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-dark">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}