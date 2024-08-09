import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const MultidisciplinaryTeamComponent = () => {
  const data = [
    { name: 'Méchanique', value: 20 },
    { name: 'Electronique', value: 30 },
    { name: 'Informatique', value: 40 },
    { name: 'Other', value: 10 },
  ];

  const COLORS = ['#dc3545', '#0dcaf0', '#ffc107', '#fd7e14'];
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="container-fluid cs-funfact_wrap  text-light p-4">
      <div className="row">
        <div className="col-lg-6 order-lg-1 mb-4 mb-lg-0">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="row mt-4 align-middle">
            {data.map((entry, index) => (
              <div key={`legend-${index}`} className="col-6 col-md-3 mb-2">
                <div className="d-flex align-items-center">
                  <div className="me-2" style={{ width: '1rem', height: '1rem', backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <div>
                    <span className="fw-semibold">{entry.name}</span>
                    <span className="ms-1 text-gray small">
                      {((entry.value / totalValue) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-lg-6 order-lg-2">
          <p className="mb-4 lead text-justify">
          <b>BenRover</b> est une équipe béninoise multidisciplinaire d'étudiants passionnés par la conception et la construction de rovers martiens et lunaires. Notre équipe exploite les ressources de Sèmè City et Tekbot Robotics pour développer de nouvelles compétences, innover dans les technologies et promouvoir les cours et les carrières dans le domaine des STIM au Bénin.
          </p>
          <p className="fst-italic text-light small text-justify">
          Bien que nous soyons une équipe d'étudiants en ingénierie, nous sommes fiers du fait que près de la moitié des membres de notre équipe font partie d'autres facultés, notamment de sciences, d'éducation et de design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultidisciplinaryTeamComponent;