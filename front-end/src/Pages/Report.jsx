import React, { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [data, setData] = useState([]);

  const glossary = [
    {
      term: "Initial Synchronization Rate",
      explanation:
        "When potential experimental subjects ingest a small portion of [Classified], their physiological and psychological reactions are recorded. These reactions are evaluated on a scale from 1 to 10 according to the [Initial Synchronization Assessment Chart]; with level one indicating no reaction and no potential for contamination or synchronization, and level ten indicating a high susceptibility to contamination or synchronization. Subjects scoring above level five will be included in the experimental roster and sent a website link for further instructions.",
    },

    {
      term: "First-Degree Physical Contact",
      explanation:
        "Subjects with an initial synchronization rate of six or higher, who have stayed in the 31st hotel for over 48 hours and have reached a contamination level between 4 and 8, will be selected for first-degree physical contact experiments with the [Fetus]. They will be invited to the cultivation chamber where, after consuming a catalyst agent, they will engage in ten minutes of direct physical contact with the [Fetus].",
    },
    {
      term: "Final Synchronization Rate",
      explanation:
        "After engaging in first-degree physical contact with the [Fetus], subjects’ subsequent physical and psychological changes are recorded. These changes are graded on a scale from 1 to 10 according to the [Final Synchronization Assessment Chart]; levels 1 to 4 indicate a complete failure of synchronization, updating the experimental status to Type C; levels 5 to eig8ht indicate partial synchronization, updating the status to Type B; level 9 indicates basic synchronization success, updating the status to Type A; and level 10 is classified as Type X, with the subject's status updated to [Classified].",
    },
    {
      term: "Contamination Level",
      explanation:
        "Every 24 hours, all experimental subjects are categorized on a scale from 1 to 10 based on the [Contamination Assessment Chart]. Subjects with a contamination level of 9 or above are considered transformed, with their status updated to Type D.",
    },
    {
      term: "Condition",
      explanation:
        "Every six hours, the status of all experimental subjects is updated. Type E represents ordinary experimental subjects; Type D are the transformed, who have become part of [Classified] and must undergo harmless processing to reduce contamination; Type C, Type B, and Type A are [Classified]; Type X represents the [Fetus].",
    },

    // Add more terms as needed
  ];
  useEffect(() => {
    const fetchData = async () => {
      alert(
        "Security Alert: A breach has been detected involving classified information. Unauthorized dissemination may have occurred with external organizations or experimental subjects. Immediate containment protocols are in effect.This message is from the 31TH Hotel Management Authority."
      );

      try {
        const response = await axios.get(
          "https://capstone-hotel-project.onrender.com/form"
        );
        console.log("response", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-20 mx-[25%] relative font-title">
      <h1 className="text-2xl font-bold text-center mb-10">
        31TH Hotel Serial Experiment Section II-DFAWH Report
      </h1>
      <section className="my-10 border-t">
        <h2 className="text-xl font-bold my-2">Result</h2>
        <div className="flex space-x-2">
          <p className="font-bold">State:</p>
          <p>Ongoing, without significant progress</p>
        </div>
        <div className="flex space-x-2">
          <p className="font-bold">Total Hotel Participants:</p>
          <p>178</p>
        </div>
        <div className="flex space-x-2">
          <p className="font-bold">Type 1 Physical Contactee:</p>
          <p>17</p>
        </div>
        <div className="flex space-x-2">
          <p className="font-bold">Synchronization Success Rate:</p>
          <p>2.5%</p>
        </div>
        <div className="flex space-x-2">
          <p className="font-bold">Highest Synchronization Rate:</p>
          <p>91.26%</p>
        </div>
        <div className="flex space-x-2">
          <p className="font-bold">Pollution Rate:</p>
          <p>89.5%</p>
        </div>
        <div className="flex space-x-2">
          <p className="font-bold">Escape Rate:</p>
          <p>0.1%</p>
        </div>
      </section>
      <section className="my-10 border-t">
        <h2 className="text-xl font-bold my-2">Statement of Purpose</h2>
        <p>
          Since the arrival of an unknown entity on October 29, 1988, at Hotel
          31, the Management has struggled to contain its influence. This
          entity, referred to as [classified], has been a source of
          contamination and horror. Recognizing the growing threat, the
          Management initiated the Hotel 31 Experiment. We created a new entity,
          distinct from the original, with the aim of combating the first and
          freeing humans from its decades-long terror. This new entity,
          developed from [classified], represents the Management's desperate
          attempt to turn the tide against the original invader
        </p>
      </section>

      <section className="my-10 border-t">
        <h2 className="text-xl font-bold my-2">Operational Procedures</h2>
        <p>
          The 31Hotel Experiment has proven effective in both reducing the
          influence and pollution concentration of [classified] and in
          identifying subjects with a high synchronization rate with the
          new-born entity.
        </p>

        <div className="my-2">
          <p>
            <strong>Transformation and Neutralization: </strong>Subjects
            undergoing transformation are sent to the neutralization chamber.
          </p>

          <p>
            <strong>Neutralization Byproducts:</strong> A portion of the
            neutralized byproduct is an orange, tasteless liquid. This liquid is
            mixed with freshly squeezed orange juice and stored in the storage
            room for next day dining service. Another byproduct of
            neutralization is a grey substance. This substance is incorporated
            into the food provided to the Type 1 Physical Contactees.
          </p>
          <p>
            <strong>Synchronization Experiment:</strong> Twenty minutes after
            the Type 1 Physical Contactees consume the food, all lights are to
            be extinguished, and the valves of the central culture dish are
            opened. Ten minutes later, the valves of the central culture dish
            are closed, all lights are restored, and the synchronization status
            of the Type 1 Physical Contactees is recorded.
          </p>
        </div>
      </section>
      <section className="my-2">
        <h2 className="text-xl font-bold mb-2">term</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Word</th>
              <th className="border px-4 py-2 text-left">Explanation</th>
            </tr>
          </thead>
          <tbody>
            {glossary.map((term, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{term.term}</td>
                <td className="border px-4 py-2">{term.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="my-10 border-t">
        <h2 className="text-xl font-bold my-2">Individual Data </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Initial Synchronization Rate</th>
              <th className="text-center">Selected?</th>
              <th className="text-center">Final Synchronization Rate</th>
              <th className="text-center">Pollution Rate </th>
              <th className="text-center">Condition</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="text-center">{item.userId}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.initialSyn}</td>
                <td className="text-center">{item.selected}</td>
                <td className="text-center">{item.finalSyn}</td>
                <td className="text-center">{item.pollutionRate}</td>
                <td className="text-center">{item.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Report;
