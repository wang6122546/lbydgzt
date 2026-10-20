export const shortcuts=[['report','隐患上报','yhsb_new.png','hazard'],['my-training','我的培训','myTraining_new.png','training'],['approval','作业审批','taskWait_new.png','operation'],['ai','隐患智能识别','aqjypx.png','hazard'],['inspection','检查任务','jcrw_new.png','hazard'],['review','隐患复查','yhfc_new.png','hazard'],['analogy','举一反三','aqjypx.png','hazard'],['snapshot','随手拍','ssp_new.png','hazard']].map(([id,name,icon,system])=>({id,name,icon,system}));
export const extraShortcuts=[['random','随机检查','jcrw_new.png','hazard'],['library','隐患库','yhsb_new.png','hazard'],['course','课程中心','aqjypx.png','training'],['exam','我的考试','taskWait_new.png','training']].map(([id,name,icon,system])=>({id,name,icon,system}));
export const allShortcuts=[...shortcuts,...extraShortcuts];
export const tasks=[{id:'demo-hazard-1',system:'hazard',title:'隐患排查',read:true,date:'2026-10-14',time:'16:47:28',text:'【示例矿业有限公司】在【111】发生隐患需要尽快整改',color:'#527cff'},{id:'demo-training-1',system:'training',title:'安全教育培训',read:true,date:'2026-10-14',time:'10:19:43',text:'安全生产示例项目 给您分配了一条培训计划【 2026年10月中旬培训计划 】（截止日期：2026-10-20），请尽快处理。',color:'#61b968'}];
export const boards=[['scene','现场管理'],['duty','安全职责'],['certificate','人员证书'],['risk','现状风险点级别动态变化']];
export const metrics=['在用设备数','待检查设备数','已逾期检查数','待检测设备数','已逾期检测数','待保养设备数','已逾期保养数','检查任务完成率','检测任务完成率','保养任务完成率','总体点检任务完成率','停用数','废弃数'];
// 从常用功能设置中观察到的完整分组；未显示图形的项目保留空图标位。
const functionGroups={
 environment:['我的课程','我的培训','环保隐患','我的考试','环保整改','环保复查','课程中心','环保信访','培训计划实施','我实施的任务','临时培训任务'],
 hazard:['隐患智能识别','检查任务','隐患整改','随机检查','隐患复查','扫码检查','举一反三','隐患库','隐患上报','随手拍','数据分析','统计报表'],
 operation:['常规作业','风险评估','安全措施','动火作业','临时用电作业','培训考核','作业审批','高处作业','吊装作业','动土作业','现场实施','盲板抽堵作业','验收审批','事件管理','断路作业','受限空间作业','拆卸作业','搬运作业','安装作业'],
 training:['下井考试管理','我的培训','我的下井考试','我的考试','我的课程','培训计划实施','我实施的任务','课程中心','临时培训任务','岗前抽考','我的岗前抽考','岗位微练'],
 'environment-training':['下井考试管理','我的培训','我的下井考试','我的考试','我的课程','培训计划实施','我实施的任务','课程中心','岗前抽考','临时培训任务','我的岗前抽考','岗位微练'],
 iot:['实时监测','事件管理'],video:['AI视频风险监测','实时视频监测'],contractor:['安全积分','必学培训课程','企业信息','新增相关方企业','人员信息','我的证书','人员证书','规章制度','责任制签署','应急预案','安全培训与交底','违章记录','三级安全培训记录','项目管理','人员核查'],slope:['综合监测','AI视频风险监测','实时视频监测','风险预警','在线监测'],discussion:['安全生产大家谈填报','安全生产大家谈审核']
};
for(const [system,names] of Object.entries(functionGroups))names.forEach((name,i)=>{if(!allShortcuts.some(x=>x.system===system&&x.name===name))allShortcuts.push({id:`${system}-function-${i}`,name,icon:null,system})});
