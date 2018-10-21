import React from 'react';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';

class Footer extends React.Component {

  render() {
    const props = this.props;
    const language = props.language;
    const dataSource = siteConfig[language];
    return (
      <footer className="footer-container">
        <div className="footer-body">
          <img src={props.logo} />
          <div className="cols-container">
            <div className="col col-12">
              <h3>{dataSource.disclaimer.title}</h3>
              <p>{dataSource.disclaimer.content}</p>
            </div>
            <div className="col col-3">
              <dl>
                <dt>{dataSource.footerattention.title}</dt>
                {
                  dataSource.footerattention.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-3">
              <dl>
                <dt>{dataSource.footerjoinus.title}</dt>
            {
              dataSource.footerjoinus.list.map((d, i) => (
                <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
              ))
            }
            </dl>
            </div>
            <div className="col col-3">
              <dl>
                <dt>{dataSource.footercontact.title}</dt>
                {
                  dataSource.footercontact.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-3">
              <dl>
                <dt>{dataSource.footerlegal.title}</dt>
                {
                  dataSource.footerlegal.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
          </div>
          <div className="footerinfo"><div className="copyright">{dataSource.copyright}</div><div><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502000499" target="_blank" rel="nofollow">粤公网安备44030502000499号</a> <a href="http://www.miitbeian.gov.cn" target="_blank" rel="nofollow">粤ICP备16092592号</a></div> <div className="qualification"><a href="https://szcert.ebs.org.cn/b7cf3361-9046-4778-864a-3bd10b6f59ca" target="_blank" rel="nofollow"><img src="/images/aic.png" title="深圳市市场监督管理局企业主体身份公示" alt="深圳市市场监督管理局企业主体身份公示"></img></a></div></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
