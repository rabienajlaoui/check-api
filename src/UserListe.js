import React from 'react'

const UseruserData = ({userData}) => {
  return (
    <div>
      <div className="card">
        <div className="ds-top" />
        <div className="avatar-holder">
        </div>
        <div className="name">
          <h2>{userData.name}</h2>
          <h3>{userData.username}</h3>
        </div>
        <div className="ds-info">
          <div className="ds pens">
            <h6>{userData.address.street} {userData.address.street} {userData.address.suite} {userData.address.city} {userData.address.zipcode}</h6>
            <h6>{userData.address.geo.lat} <span> / </span> {userData.address.geo.lng}</h6>
          </div>
          <div className="ds projects">
            <h6 title="Number of projects created by the user">{userData.email}<br/>{userData.phone}<br/>{userData.website}<br/>{userData.company.name}<br/>{userData.company.catchPhrase}<br/>{userData.company.bs} </h6>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default UseruserData