import React from 'react';
import './OurStaff.css';

const staffMembers = [
    {
        id: 1,
        name: "Nagendra",
        role: "Nursery Head",
        image: "https://images.unsplash.com/photo-1542314831-c6a4d14effea?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Venkatesh",
        role: "Landscaping Manager",
        image: "https://images.unsplash.com/photo-1581579205556-33923b7b80b7?q=80&w=2574&auto=format&fit=crop"
    }
];

export const OurStaff: React.FC = () => {
    return (
        <section className="our-staff">
            <h2 className="section-title">Meet Our Staff</h2>
            <div className="staff-grid">
                {staffMembers.map((staff) => (
                    <div key={staff.id} className="staff-card">
                        <div className="staff-image-container">
                            <img src={staff.image} alt={staff.name} className="staff-image" />
                        </div>
                        <div className="staff-info">
                            <h3 className="staff-name">{staff.name}</h3>
                            <p className="staff-role">{staff.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
