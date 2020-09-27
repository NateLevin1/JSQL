module.exports = {
    editor: {
        create: ()=>{return {
            getValue: ()=>"",
            updateOptions: (obj)=>{
                for(const [key, value] of obj) {
                    this._options[key] = value;
                }
            },
            getOption: (name)=>{
                return this._options[name];
            },
            _options: {
                fontSize: 16
            }
        }},
        EditorOption: {
            fontSize: "fontSize"
        }
    }
}