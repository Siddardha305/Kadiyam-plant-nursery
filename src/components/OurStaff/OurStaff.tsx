import React from 'react';
import './OurStaff.css';

const staffMembers = [
    {
        id: 1,
        name: "Challa DurgaPrasad",
        role: "Nursery Head & Landscaping Manager",
        image: "../owner.jpeg"
    },
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
