import React from 'react';

export default function Landing() {
  return (
    <main className="landing">
      <aside className="left"></aside>
      <aside className="right"></aside>

      <section className="center">

        <div className="content">
          <h2 className="title"> Welcome to CUB3 </h2>
          <p className="caption"> A Customizable 3D Media Player </p>
          <a href="http://localhost:3001/auth">
            <h3 className="login"> Login </h3></a>
          <p className="details"> To create your first Cube! </p>
        </div>

      </section>
    </main>
  )
}