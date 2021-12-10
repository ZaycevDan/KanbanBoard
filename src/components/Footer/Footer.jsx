import React from 'react';
import './Footer.css';

export default function Footer(props) {
  
  let start = props.tasks[0].text.length;
  let finish = props.tasks[3].text.length;

  return (
    <div className="footer">
      <div className="container container-footer">

        <div className="footer__count">
          <div>Active tasks: {start}</div>
          <div>Finished tasks: {finish}</div> 
        </div>
        
        <div>
          <a className='footer__link' href="https://github.com/ZaycevDan/JavaScriptSkill" target='_blank' rel="noreferrer">
            Kanban board by Zaycev Daniil, 2021
          </a>
        </div>

      </div>
    </div>
  )
}

