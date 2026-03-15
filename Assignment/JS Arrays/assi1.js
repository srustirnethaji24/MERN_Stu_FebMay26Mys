let ticketss= [
    {id: "T1", priority:"high",resolved:false},
    {id: "T2", priority:"medium",resolved:true},
    {id: "T3", priority:"low",resolved:false},
    {id: "T4", priority:"high",resolved:true},
    {id: "T5", priority:"medium",resolved:false}
];
tickets.unshift({ id:"T1",priority: "high",resolved:false});
tickets.push(
    {id:"T6",priority:"medium",resolved:false},
    {id:"T7",priority:"low",resolved:true}
);
let currentTicket = tickets.shift();
let droppedticket = tickets.pop();
let pending = tickets.filter(ticket => ticket.resolved=== false);
let pendingIds = pending.map(ticket => ticket.id);
 
console.log(currentTicket);
console.log(droppedticket);
console.log(pending);
console.log(pendingIds);
