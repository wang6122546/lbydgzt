import {shortcuts,allShortcuts,tasks,boards} from '../data/seed.js';
const key='mobile-platform-demo-v1';
const initial=()=>({shortcutIds:shortcuts.map(s=>s.id),boardIds:boards.map(b=>b[0]),cacheKB:1026,tasks:structuredClone(tasks)});
function read(){try{return JSON.parse(localStorage.getItem(key))||initial()}catch{return initial()}}
function write(state){localStorage.setItem(key,JSON.stringify(state));return state}
export const repository={getSettings(){const s=read();s.shortcutIds.sort((a,b)=>allShortcuts.findIndex(x=>x.id===a)-allShortcuts.findIndex(x=>x.id===b));return s},saveSettings(patch){return write({...read(),...patch})},listTasks(){return read().tasks},getTask(id){return read().tasks.find(t=>t.id===id)},updateTask(id,patch){const s=read();s.tasks=s.tasks.map(t=>t.id===id?{...t,...patch}:t);return write(s)},createTask(task){const s=read();const entity={...task,id:task.id||crypto.randomUUID()};if(s.tasks.some(t=>t.id===entity.id))throw new Error('任务标识已存在');s.tasks.push(entity);write(s);return entity},removeTask(id){const s=read();s.tasks=s.tasks.filter(t=>t.id!==id);return write(s)},clearCache(){return this.saveSettings({cacheKB:0})}};
