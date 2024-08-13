//import { Icon } from '@iconify/react';
import React from 'react';
//import Slider from 'react-slick';
import Spacing from '../Spacing';
import Div from '../Div';
import Timeline from '../Timeline';

const timelineData = [
    [
      {
      title: 'Innovation Technologique',
      text: 'En tant que premier rover construit au Bénin, nous contribuons à développer et à mettre en œuvre des technologies uniques pour révéler le potentiel technologique au Bénin pour résoudre des problèmes technologiques complexes.',
    },
    ],
    [
      {
        title: 'Éducation et Sensibilisation',
        text: "BenRover est une opportunité pour mettre en œuvre les compétences acquises, d’inspirer et de former la prochaine génération d'ingénieurs pluridisciplinaires et à populariser les STIM (sciences, technologies, ingénierie et mathématiques).",
      }
    ]
];

export default function Goals() {

  return (
      timelineData.map((item, index) => (
        <Div className="col-lg-6" key={index}>
          <Timeline columnData={item} />
          <Spacing md={10} />
        </Div>
      ))
  );
}
