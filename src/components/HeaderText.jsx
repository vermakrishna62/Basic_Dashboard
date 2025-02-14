import React, { useState, useEffect } from "react";

const HeaderText = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good Morning ☀️");
    else if (hours < 18) setGreeting("Good Afternoon 🌤️");
    else setGreeting("Good Evening 🌙");
  }, []);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="px-5 py-2">
      <h1 className="text-xs text-gray-600">{currentDate}</h1>
      <p className="text-xl font-semibold">Welcome Back, Krishna 👋</p>
      <p className="text-sm text-indigo-600 font-medium">{greeting}</p>
    </div>
  );
};

export default HeaderText;
