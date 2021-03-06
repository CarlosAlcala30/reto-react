/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import './styles.scss'

function Footer() {
	return (
	<footer classname="ml-0 mr-0 footer-devto">
  <div id="footer-container" classname="container-sm">
    <p classname="footer-content"><a href="#" target="_self">DEV Community </a>  – A constructive and inclusive social network for software developers. With you every step of your journey.</p>
    <div classname="footer-content mb-2">
      <p>Built on<a href="#" target="_self"> Forem </a> - the<a href="#" target="_self">Open Source </a>software that powers <a href="#" target="_self"> DEV </a>and
        other
        inclusive communties commuties.</p>
      <p>Made with love and<a href="#" target="_self"> Ruby on Rails.</a>DEV Community 2016-2021.</p>
      <div><a href="https://www.forem.com" target="_blank" rel="noopener" className="inline-block mt-4"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="afxteq2ygy9nm33e6547hvgbyhxzg2ou" className="crayons-icon crayons-icon--default"><title id="afxteq2ygy9nm33e6547hvgbyhxzg2ou">Forem logo</title>
            <g clipPath="url(#clip0)" fill="#1AB3A6">
              <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
        </a></div>
    </div>
  </div>
</footer>

	)
}
export default Footer;