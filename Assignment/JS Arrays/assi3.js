const rules = [
    { role:"admin", action:"read", allowed:true},
    { role:"admin", action:"write", allowed:false},
    { role:"student", action:"read", allowed:true},
    { role:"student", action:"write", allowed:false},
    { role:"guest", action:"read", allowed:true},
    { role:"guest", action:"write", allowed:false}
];
const allowedRules = rules.filter(rule => rule.allowed === true);
const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);
const summary = rules.reduce((acc,rule)=> {
    if(!acc[rule.role]){
      acc[rule.role] = 0;
    }

    if(rule.allowed){
        acc[rule.role]++;
    }

    return acc;
},{});

["admin","student","guest"].forEach(role => {
    if(!summary[role]) summary[role] = 0;
});

console.log(allowedRules);
console.log(allowedPairs);
console.log(summary);