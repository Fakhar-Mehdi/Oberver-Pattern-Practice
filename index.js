class Subject {
    constructor(name) {
        this.observers = []
        this.name= name
    }
    subscribe(s) {
        this.observers.push(s)
    }
    unSubscribe(s) {
        this.observers = this.observers.filter(sub=> s!==sub)
    }
    notify() {
        const subjectName = this.name
        this.observers.forEach(o=> o.notify(subjectName))
    }
}

class Observer {
    constructor(name){
        this.name = name
        
    }
    
    notify(name)
    {
        console.log(this.name , ' is being notified by', name)
    }
}

const o1 = new  Observer('fakhar')
const o2 = new Observer('bhaiya')
const o3 = new Observer('mehdi')

const subj = new Subject('Relukattay')
subj.subscribe(o1)
subj.subscribe(o2)
subj.subscribe(o3)

subj.notify()