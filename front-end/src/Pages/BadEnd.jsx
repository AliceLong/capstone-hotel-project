import React, { useState, useEffect } from "react";
import "./BadEnd.css"; // Make sure to import the stylesheet where you've defined the above CSS

const BadEnd = () => {
  const [showText, setShowText] = useState(false);
  const [userData, setUserData] = useState(null);
  const [conditionType, setConditionType] = useState("Type E");
  const [displayConditionType, setDisplayConditionType] = useState("Type E");

  const classifyUsername = (username) => {
    if (username.length <= 2) {
      return username;
    }
    return username[0] + "***" + username[username.length - 1];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://capstone-hotel-project.onrender.com/form"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // If data is an array and it has at least one item, select the last item
        if (Array.isArray(data) && data.length > 0) {
          const lastItem = data[data.length - 1];
          lastItem.name = classifyUsername(lastItem.name);
          setUserData(lastItem);
        }
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData(); // Call the fetchData function

    // Set a timeout for 5 seconds before showing the text
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  useEffect(() => {
    if (userData) {
      // Start the animation to change condition type after fetching data
      const conditionTimer = setTimeout(() => {
        setConditionType(userData.condition);
      }, 2000); // Delay to start this animation, adjust as needed

      return () => clearTimeout(conditionTimer);
    }
  }, [userData]); // This effect runs when userData changes

  useEffect(() => {
    if (conditionType !== displayConditionType) {
      if (displayConditionType.length > 0) {
        // Delete the current text
        const deleteTimer = setTimeout(() => {
          setDisplayConditionType(displayConditionType.slice(0, -1));
        }, 500);
        return () => clearTimeout(deleteTimer);
      } else {
        // Type the new text
        const index = conditionType.length - displayConditionType.length - 1;
        const typeTimer = setTimeout(() => {
          setDisplayConditionType(conditionType.slice(0, index + 1));
        }, 500);
        return () => clearTimeout(typeTimer);
      }
    }
  }, [conditionType, displayConditionType]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <div className="text-2xl font-bold text-center mb-10 font-title uppercase">
        {showText && <div className="typing">Status Update:</div>}
      </div>

      {userData && (
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">User Condition Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{userData.userId}</td>
              <td className="border px-4 py-2">
                {classifyUsername(userData.name)}
              </td>
              <td className="border px-4 py-2 ">{displayConditionType}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BadEnd;
