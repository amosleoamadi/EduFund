import React from "react";
import { ImpactStyle } from "./ImpactStyle";

const Impact = () => {
  const stats = [
    { value: "₦12M+", label: "Total Raised" },
    { value: "400+", label: "Verified Students" },
    { value: "60+", label: "Partner Schools" },
    { value: "98%", label: "Donor Satisfaction" },
  ];

  return (
    <ImpactStyle>
      <h2>Our Impact</h2>
      <p className="subtitle">
        Real numbers, real change, real futures transformed
      </p>

      <div className="stats">
        {stats.map((item, index) => (
          <div className="stat" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </ImpactStyle>
  );
};

export default Impact;
