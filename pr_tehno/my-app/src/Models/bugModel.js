function bug(bug){
    if(bug!=undefined){
        this._id=bug.id;
        this.name=bug.name;
        this.details=bug.details;
        this.priority=bug.priority;
        this.creator=bug.creator;
    
    }
}