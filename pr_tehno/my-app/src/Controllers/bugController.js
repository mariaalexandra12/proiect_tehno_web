import bugModel from '../Models/bugModel'

export function retreiveBugs(){
    let data=[];
    data.push(new bugModel({
        _id:1254,
        name:"Crash on load",
        details:"Crashes after 3 sec",
        priority:3,
        creator:"Maria",
        severity:4
    }))

    data.push(new bugModel({
        _id:1254,
        name:"Don't load",
        details:"Crashes after 3 sec",
        priority:2,
        creator:"Alexandra",
        severity:6
    }))

    let sort=data.sort((a,b)=>{return a.priority-b.priority})
    return sort;
}