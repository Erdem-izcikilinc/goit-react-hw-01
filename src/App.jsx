import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/Friendlist.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "20px",
      }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
