import React from "react";
import { 
  Link,
} from "carbon-components-react";
import defineBlock from "../../utils/defineBlock";
// import { links } from '../../../constants';

const bem = defineBlock('EducationPage');

function Education() {
  return (
    <div>
    <div>
      <div className={bem('uni-info', 'CWRU')}>
        <Link
          className={bem('uni-logo')}
          href={"linkedin.com"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="static/images/education/CWRU_logo.svg"
            alt="CWRU logo"
          />
        </Link>
        <div className={bem(['uni-row', 'degree'])}>
          Bachelor of Science in Biomedical Engineering
        </div>
        <div className={bem(['uni-row', 'graduation'])}>
          Awarded in May 2018
        </div>
      </div>
      <div className={bem('uni-spacer')} />
      <div className={bem('uni-info', 'UCT')}>
        <Link
          className={bem('uni-logo')}
          href={"linkedin.com"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="static/images/education/UCT_logo.svg"
            alt="USC logo"
          />
        </Link>
        <div className={bem(['uni-row', 'reason'])}>
          <Link
            href={"linkedin.com"}
            target="_blank"
            rel="noreferrer"
          >
            IES Study Abroad
          </Link> program in South Africa
        </div>
        <div className={bem(['uni-row', 'degree'])}>
          Master of Science in Computer Science
        </div>
        <div className={bem(['uni-row', 'graduation'])}>
          Awarded in May 2020
        </div>
      </div>
    </div>
    </div>
  );
}

export default Education;