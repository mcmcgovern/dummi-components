import React from "react";

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
        jobclass: "unemployed",
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
        jobclass: "unemployed",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 1,
      },
      {
        id: 3,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "unemployed",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 1,
      },
      {
        id: 4,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "unemployed",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 1,
      },
      {
        id: 5,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "unemployed",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
        numkids: 1,
      },
      {
        id: 6,
        username:
          "name as given from form input, fb, or anonymous if they would prefer",
        profilepic: "url/to/profile/pic... or use a single pic for default",
        paytype: "facebook-> save as 1 for smaller data?maybenot?",
        payinfo: "@user-handle",
        jobclass: "unemployed",
        reason: "bills",
        mystory:
          "textarea for a ~breif description of what has happened to them or where they come from",
        numadults: 2,
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
                <li>{item.numadults} adults</li>
                <li>{item.numkids} kids</li>
                <li>I need money for {item.reason}</li>
                <li>I am a {item.jobclass}</li>
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
