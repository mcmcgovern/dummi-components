import React from "react";
import logo from "../logo.svg";

const MutAidFeed = (props) => {
  const sample = {
    users: [
      {
        id: 1,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "Lost Job",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 1,
      },
      {
        id: 2,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "Unemployed",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 1,
        numkids: 0,
      },
      {
        id: 3,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "Lost Job",
        reason: "rent",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 5,
      },
      {
        id: 4,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "Homeless",
        reason: "food",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 3,
      },
      {
        id: 5,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "Lost Job",
        reason: "medical bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 10,
      },
      {
        id: 6,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "Medical Staff",
        reason: "student loans",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 4,
        numkids: 1,
      },
    ],
  };

  function toggleStory(storyid) {
    console.log(storyid);
    //document.getElementById(storyid).toggle();
  }

  return (
    <div>
      <h1>6 posts, then 1 thank you</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "3rem",
          textAlign: "left",
          padding: "30px",
        }}
      >
        {sample.users.map((item) => {
          return (
            <div style={{ border: "5px solid lime" }}>
              <ul
                style={{ paddingInlineStart: "65px", paddingInlineEnd: "65px" }}
              >
                <li>
                  <img src={item.profilepic} alt="" />
                  {item.username}
                </li>
                <li>
                  {[...Array(item.numadults)].map((e, i) => (
                    <img src={logo} alt="" height="70px" />
                  ))}
                  {[...Array(item.numkids)].map((e, i) => (
                    <img src={logo} alt="" height="30px" />
                  ))}
                </li>
                <li>
                  {item.numadults} adults, {item.numkids} kids
                </li>
                <li>I need money for {item.reason}</li>
                <li>{item.jobclass}</li>
                <li>
                  <button>Doante</button>
                  {item.payinfo}
                </li>
                <hr />
                <li>
                  My story <button onClick={toggleStory(`hide`)}>v</button>
                </li>
                <li id={item.id + "hide"} style={{ display: "none" }}>
                  {item.mystory}
                </li>
                <li id="hide" style={{ display: "none" }}>
                  {item.mystory}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MutAidFeed;
