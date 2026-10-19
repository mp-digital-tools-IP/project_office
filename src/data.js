// ONLY SYNTHETIC DEMONSTRATION DATA. No real Moscow Polytechnic project records.
export const addDays = (days, base = new Date()) => {
  const date = new Date(base.getFullYear(), base.getMonth(), base.getDate());
  date.setDate(date.getDate() + days);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
};

export const demoProjects = [
  { id:'СЦ-2-001', name:'Внедрение STEAM-модели в инженерные ООП', short:'STEAM-модель ООП', manager:'Алексеева М.В.', unit:'Департамент образовательной политики', type:'Стратегический', cycle:'Продолжающийся', phase:'Реализация', initiative:'STEAM-модель и инженерный портфель ООП', progress:64, approved:8700000, contracted:6300000, spent:3700000, kpi:[{code:'N1',label:'Доля ООП по критериям STEAM',base:'10%',target:'30%',fact:'18%'}], updated:addDays(-8), risks:[{name:'Несогласованность изменений ООП',level:'Средний'}], owner:'Алексеева М.В.', description:'Демонстрационный проект. Актуализация инженерных программ по критериям STEAM и повторная экспертиза образовательных результатов.' },
  { id:'СЦ-2-002', name:'Цифровая поддержка персональных траекторий', short:'Персональные траектории', manager:'Соколов П.Н.', unit:'Факультет информационных технологий', type:'Стратегический', cycle:'Новый', phase:'Реализация', initiative:'Среда реализации и цифровая поддержка STEAM-модели', progress:43, approved:5900000, contracted:3500000, spent:2100000, kpi:[{code:'N10',label:'Удовлетворённость сопровождением',base:'—',target:'15',fact:'9'}], updated:addDays(-22), risks:[{name:'Зависимость от интеграций',level:'Высокий'}], owner:'Соколов П.Н.', description:'Демонстрационный проект. Прототип цифровой поддержки индивидуальных образовательных траекторий.' },
  { id:'СЦ-2-003', name:'Междисциплинарные инженерные команды', short:'Инженерные команды', manager:'Крылова Е.А.', unit:'Центр проектной деятельности', type:'Стратегический', cycle:'Продолжающийся', phase:'Реализация', initiative:'Проектная, исследовательская и индустриальная деятельность студентов', progress:72, approved:2800000, contracted:2100000, spent:1700000, kpi:[{code:'N4',label:'Доля участников внешних проектов',base:'10%',target:'30%',fact:'24%'}], updated:addDays(-5), risks:[], owner:'Крылова Е.А.', description:'Демонстрационный проект. Развитие междисциплинарных студенческих проектных команд.' },
  { id:'СЦ-2-004', name:'Инженерные результаты студентов и реестр прототипов', short:'Реестр прототипов', manager:'Никитин Д.С.', unit:'Инженерная школа', type:'Стратегический', cycle:'Перезапускающийся', phase:'Реализация', initiative:'Инженерные и технологические результаты студентов', progress:37, approved:4200000, contracted:2600000, spent:1400000, kpi:[{code:'N17',label:'Вовлечение в НИОКР',base:'5%',target:'8%',fact:'5,7%'}], updated:addDays(-37), risks:[{name:'Недостаток подтверждающих артефактов',level:'Высокий'}], owner:'Никитин Д.С.', description:'Демонстрационный проект. Учёт и передача перспективных студенческих инженерных результатов.' },
  { id:'СЦ-2-005', name:'Наставничество проектных команд', short:'Наставничество', manager:'Морозова И.К.', unit:'Центр проектной деятельности', type:'Операционный', cycle:'Новый', phase:'Реализация', initiative:'Сквозная проектно-продуктовая траектория студента', progress:51, approved:1200000, contracted:700000, spent:460000, kpi:[{code:'N10',label:'Качество наставничества',base:'—',target:'15',fact:'11'}], updated:addDays(-11), risks:[], owner:'Морозова И.К.', description:'Демонстрационный проект. Регулярная поддержка команд в проектных дисциплинах.' },
  { id:'СЦ-2-006', name:'Аналитика образовательных результатов выпускников', short:'Аналитика выпускников', manager:'Белов А.А.', unit:'Центр карьеры', type:'Стратегический', cycle:'Новый', phase:'Планирование', initiative:'Контур качества «абитуриент — студент — выпускник — работодатель»', progress:18, approved:3100000, contracted:1000000, spent:260000, kpi:[{code:'N9',label:'Индекс удовлетворённости',base:'—',target:'20',fact:'—'}], updated:addDays(-13), risks:[], owner:'Белов А.А.', description:'Демонстрационный проект. Разработка аналитического контура обратной связи выпускников.' },
  { id:'СЦ-2-007', name:'Образовательные продуктовые цепочки', short:'Продуктовые цепочки', manager:'Фёдорова О.В.', unit:'Факультеты и инженерные школы', type:'Стратегический', cycle:'Продолжающийся', phase:'Реализация', initiative:'Продуктовые образовательные контуры и цепочки программ', progress:79, approved:6200000, contracted:5000000, spent:4500000, kpi:[{code:'N1',label:'Соответствие критериям STEAM',base:'10%',target:'30%',fact:'25%'}], updated:addDays(-3), risks:[], owner:'Фёдорова О.В.', description:'Демонстрационный проект. Связка дисциплин, проектов и производственных практик.' }
];

export const demoMilestones = [
  {id:'КТ-001', projectId:'СЦ-2-001',name:'Утверждены критерии STEAM-экспертизы',level:0,date:addDays(-21),owner:'Алексеева М.В.',state:'accepted',evidence:'Протокол экспертизы (демо)'},
  {id:'КТ-002', projectId:'СЦ-2-001',name:'Проведена повторная экспертиза пилотных ООП',level:0,date:addDays(6),owner:'Алексеева М.В.',state:'active',evidence:''},
  {id:'КТ-003', projectId:'СЦ-2-002',name:'Подключены источники данных образовательного профиля',level:0,date:addDays(-19),owner:'Соколов П.Н.',state:'active',evidence:''},
  {id:'КТ-004', projectId:'СЦ-2-002',name:'Демонстрация работающего прототипа',level:1,date:addDays(18),owner:'Соколов П.Н.',state:'active',evidence:''},
  {id:'КТ-005', projectId:'СЦ-2-003',name:'Реестр внешних инженерных проектов обновлён',level:0,date:addDays(4),owner:'Крылова Е.А.',state:'submitted',evidence:'Реестр участников, демонстрационный пример'},
  {id:'КТ-006', projectId:'СЦ-2-004',name:'Верифицированы паспорта студенческих прототипов',level:0,date:addDays(-8),owner:'Никитин Д.С.',state:'active',evidence:''},
  {id:'КТ-007', projectId:'СЦ-2-005',name:'Подготовлен реестр наставников команд',level:0,date:addDays(11),owner:'Морозова И.К.',state:'active',evidence:''},
  {id:'КТ-008', projectId:'СЦ-2-006',name:'Утверждён контур источников данных',level:0,date:addDays(28),owner:'Белов А.А.',state:'active',evidence:''},
  {id:'КТ-009', projectId:'СЦ-2-007',name:'Подготовлены карты продуктовых цепочек',level:0,date:addDays(-4),owner:'Фёдорова О.В.',state:'accepted',evidence:'Карты программ (демо)'},
  {id:'КТ-010', projectId:'СЦ-2-007',name:'Подтверждена реализация пилотного модуля',level:0,date:addDays(19),owner:'Фёдорова О.В.',state:'active',evidence:''}
];

export const demoTasks = [
 {id:'З-101',projectId:'СЦ-2-001',milestoneId:'КТ-002',name:'Собрать замечания экспертной комиссии',assignee:'Ильин А.С.',due:addDays(2),status:'В работе',priority:'Высокий'},
 {id:'З-102',projectId:'СЦ-2-001',milestoneId:'КТ-002',name:'Согласовать обновлённые матрицы компетенций',assignee:'Алексеева М.В.',due:addDays(8),status:'К выполнению',priority:'Средний'},
 {id:'З-103',projectId:'СЦ-2-002',milestoneId:'КТ-003',name:'Описать формат обмена данными',assignee:'Соколов П.Н.',due:addDays(-3),status:'В работе',priority:'Высокий'},
 {id:'З-104',projectId:'СЦ-2-002',milestoneId:'КТ-004',name:'Подготовить прототип карточки студента',assignee:'Романова Е.Г.',due:addDays(5),status:'На проверке',priority:'Средний'},
 {id:'З-105',projectId:'СЦ-2-003',milestoneId:'КТ-005',name:'Проверить подтверждения участия студентов',assignee:'Крылова Е.А.',due:addDays(2),status:'На проверке',priority:'Высокий'},
 {id:'З-106',projectId:'СЦ-2-004',milestoneId:'КТ-006',name:'Запросить протоколы испытаний прототипов',assignee:'Никитин Д.С.',due:addDays(-12),status:'Заблокирована',priority:'Высокий'},
 {id:'З-107',projectId:'СЦ-2-005',milestoneId:'КТ-007',name:'Согласовать критерии работы наставников',assignee:'Морозова И.К.',due:addDays(10),status:'К выполнению',priority:'Средний'},
 {id:'З-108',projectId:'СЦ-2-006',milestoneId:'КТ-008',name:'Подготовить перечень данных Центра карьеры',assignee:'Белов А.А.',due:addDays(17),status:'В работе',priority:'Средний'},
 {id:'З-109',projectId:'СЦ-2-007',milestoneId:'КТ-010',name:'Зафиксировать результаты пилотного модуля',assignee:'Фёдорова О.В.',due:addDays(12),status:'В работе',priority:'Средний'},
 {id:'З-110',projectId:'СЦ-2-007',milestoneId:'КТ-010',name:'Подписать акт внедрения',assignee:'Петров К.И.',due:addDays(18),status:'К выполнению',priority:'Средний'},
 {id:'З-111',projectId:'СЦ-2-003',milestoneId:'КТ-005',name:'Проверить итоги конкурса',assignee:'Лебедева Н.В.',due:addDays(-2),status:'Выполнена',priority:'Средний'}
];

export const demoInitiatives = [
 {id:'ИН-2027-01', name:'Единая витрина образовательных программ',author:'Белов А.А.',date:addDays(-5),state:'На рассмотрении',stage:2,description:'Демонстрационная инициатива цифровой поддержки образовательных программ.'},
 {id:'ИН-2027-02', name:'Лаборатория междисциплинарных решений',author:'Морозова И.К.',date:addDays(-9),state:'Предварительно одобрено',stage:4,description:'Демонстрационная инициатива развития инженерной инфраструктуры.'},
 {id:'ИН-2027-03', name:'Цифровая оценка проектных компетенций',author:'Никитин Д.С.',date:addDays(-1),state:'Черновик',stage:0,description:'Демонстрационная инициатива инструментов подтверждения компетенций.'}
];

export const demoActivity = [
 {id:'A-1',projectId:'СЦ-2-003',date:addDays(0),name:'Руководитель портфеля',text:'Получена контрольная точка КТ-005 на приёмку.',kind:'milestone'},
 {id:'A-2',projectId:'СЦ-2-001',date:addDays(-1),name:'Алексеева М.В.',text:'Обновлены материалы STEAM-экспертизы.',kind:'comment'},
 {id:'A-3',projectId:'СЦ-2-002',date:addDays(-2),name:'Система',text:'Контрольная точка КТ-003 просрочена более чем на 14 дней.',kind:'alert'},
 {id:'A-4',projectId:'СЦ-2-007',date:addDays(-3),name:'Руководитель портфеля',text:'Принята контрольная точка КТ-009.',kind:'milestone'}
];
