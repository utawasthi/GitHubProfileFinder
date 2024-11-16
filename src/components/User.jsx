import React from 'react';

export default function User({ avatar_url, followers, following, public_repos, url, name, login , created_at }) {

  const createdDate = new Date(created_at);

  return (
    <div className='user'>
      <div>
        <img src={avatar_url} className='avatar' alt='User Avatar' />
      </div>
      <div className = 'name-date'>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p> User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us' , {
          month : 'short'
        })} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className = 'other-details'>
        <div>
          <p>Public Repos : </p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers : </p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following : </p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
