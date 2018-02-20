var Alfreda = function Alfreda() {
    this.modules = []
}

Alfreda.prototype.use = function (module) {
    if (!module.meta || !module.meta.name) {
        throw new Error("Cannot import module without name.");
    } else {
        Alfreda.prototype[module.meta.name] = module;
        this.modules.push(module.meta);
    }
}

Alfreda.prototype.parse = function (argv) {
    var [_, _, command, ...args] = argv
    this.modules.forEach(meta => {
        if (meta.alias === command 
        && args.length === meta.numArgs) {
            if (meta.numArgs === 1) {
                this[meta.name](args[0])
            } else {
                //PROGRAMMER TODO
            }
        }
    });
}


module.exports = Alfreda;