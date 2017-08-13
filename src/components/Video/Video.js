import React from 'react';
import 'react-html5video/dist/styles.css';
import './_Video.scss';

export default function Video() {
  return (
    <div>

      <div className="container">
        <div className="wrap"></div>

          <iframe className="desktop-video"
            title="video here"
            src="https://www.youtube.com/embed/vWaljXUiCaE"
            allowFullScreen>
          </iframe>

          <iframe className="mobile-video"
            title="video here"
            src="https://www.youtube.com/embed/vWaljXUiCaE"
            allowFullScreen>
          </iframe>

        <div className="wrap"></div>
      </div>

    </div>
  )
}