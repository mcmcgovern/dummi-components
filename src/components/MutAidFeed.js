import React from "react";

const MutAidFeed = (props) => {
  return (
    <div>
      <h1>6 posts, then 1 thank you</h1>
      {props.items.maps((item) => {
        return (
          <div key={item.id}>
            <ul>
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
                My story <button>v</button>
              </li>
              <li>{item.mystory}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MutAidFeed;
