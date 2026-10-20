export const pages={home:'index.html',work:'pages/workbench.html',me:'pages/me.html',todo:'pages/todo.html',notices:'pages/notices.html',subsystem:'pages/subsystem.html',partner:'pages/partner.html',partnerPeople:'pages/partner-people.html',partnerPeopleEdit:'pages/partner-people-edit.html',partnerTraining:'pages/partner-training.html',partnerTrainingEdit:'pages/partner-training-edit.html'};
// 后续子系统实现后只需填写 url；所有入口共用此表。不要填入聊天链接作为业务地址。
export const systems=[
 ['health','职业健康','occupational-health-app.png'],['environment','环保管理','environmental_management_app.png'],['hazard','隐患排查治理','yhzl.png'],['operation','安全作业管理','aqzygl.png'],['training','安全教育培训','aqjypx.png'],['environment-training','环保教培','aqjypx.png'],['iot','物联网监测','wlwjc.png'],['video','视频监测','spwljg.png'],['contractor','相关方管理','xgfgl.png'],['slope','边坡尾矿库监测预警',null],['tenant','承租方管理','czfglyd.png'],['discussion','安全生产大家谈',null],['scene','现场管理',null],['duty','安全职责',null],['certificate','人员证书',null],['risk','现状风险点级别动态变化',null]
].map(([id,name,icon])=>({id,name,icon,url:id==='contractor'?'pages/partner.html':id==='operation'?'pages/operation-menu.html':null}));
export const rootURL=new URL('../',import.meta.url);
export const pageURL=(key,params={})=>{const u=new URL(pages[key],rootURL);Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,v));return u.href};
export function systemURL(id,params={}){const s=systems.find(s=>s.id===id);if(s?.url){const u=new URL(s.url,rootURL);Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,v));return u.href}return pageURL('subsystem',{system:id,...params})}
