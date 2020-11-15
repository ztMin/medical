import React from 'react'
import '../style/index.css'
export default function Index (props) {
  return (
    <div className="pageIndex">
      <div><img src={require('../image/aboutBanner.png').default} /></div>
      <div className="padding-20">
        <div className="flex marginBottom-20">
          <img className="show marginRight-10" src={require('../image/userRound.png').default} width="50" height="50" />
          <div className="title flex-1">
            <h2>中航苑社区健康服务中心简介</h2>
            <p>Brief introduction of zhonghangyuan Community Health Service Center</p>
          </div>
        </div>
        <div>
          <p className="marginBottom-20 textIndent-2">深圳市福田区中航苑社区健康服务中心是由企业门诊部转型而来的社会办社区卫生服务机构。多年来在市、区卫健主管部门的支持下，中航苑社康以“创建政府、居民、员工信赖的社康中心”为目标，以满足社区居民基本卫生服务需求为导向的国家百强、深圳市示范社区卫生服务机构。</p>
          <p>2010-2018连续九年在全市社康工作评审中被评为优秀的A级； </p>
          <p>2011年获得“广东省示范社康中心”称号；</p>
          <p>2012年被评为深圳市计划生育优质服务点；</p>
          <p>2013年度最具公益影响力的社区健康服务中心；</p>
          <p>2014年国家群众安逸的社区卫生服务机构(全市仅一家)；</p>
        </div>
      </div>
    </div>
  )
}