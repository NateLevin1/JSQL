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
            },
            getModel() {
                return {};
            }
        }},
        EditorOption: {
            fontSize: "fontSize"
        },
        setTheme(theme) {

        },
        defineTheme(theme, rules) {

        },
        createModel(source, lang, parsedURI) {

        },
        setModelLanguage(model, langID) {

        },
    },
    languages: {
        typescript: {
            javascriptDefaults: {
                setCompilerOptions:(options)=>{},
                addExtraLib: (source, uri)=>{}
            }
        },
        register:(options)=>{},
        setMonarchTokensProvider: (name, options)=>{}
    },
    Uri: {
        parse: (uri)=>{}
    }
}